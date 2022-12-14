from z3 import *

from Solvers.Core.ManuverSolver import ManuverSolver


class ManuverSolver_SB(ManuverSolver):
    def _symmetry_breaking(self):

        # one criteria
        if "PR" == self.sb_option:  # PR
            self.sbPrice()
        elif "L" == self.sb_option:  # L
            self.sbVMLoad()
        elif "LX" == self.sb_option:  # LX
            self.sbLex()
        elif "FV" == self.sb_option:  # FV
            self.sbFixVariables()

        # two criteria
        elif "PRLX" == self.sb_option:  # PRLX
            self.sbPrice(criteria1="RestrictionLex")
        elif "PRL" == self.sb_option:  # PRL
            self.sbPrice(criteria1="RestrictionLoad")

        elif "LLX" == self.sb_option:  # LLX
            self.sbVMLoad(criteria1="RestrictionLex")
        elif "LPR" == self.sb_option:  # LPR
            self.sbVMLoad(criteria1="RestrictionPrice")
        elif "FVPR" == self.sb_option:  # FVPR
            self.sbFixVariables(criteriaList=["RestrictionPrice"])
        elif "FVL" == self.sb_option:  # FVL
            self.sbFixVariables(criteriaList=["RestrictionLoad"])
        elif "FVLX" == self.sb_option:  # FVLX
            self.sbFixVariables(criteriaList=["RestrictionLex"])

        # three criterias
        elif "FVPRL" == self.sb_option:  # FVPRL
            self.sbFixVariables(criteriaList=["RestrictionPrice", "RestrictionLoad"])
        elif "FVPRLX" == self.sb_option:  # FVPRLX
            self.sbFixVariables(criteriaList=["RestrictionPrice", "RestrictionLex"])
        elif "FVLPR" == self.sb_option:  # FVLPR
            self.sbFixVariables(criteriaList=["RestrictionLoad", "RestrictionPrice"])
        elif "FVLLX" == self.sb_option:  # FVLLX
            self.sbFixVariables(criteriaList=["RestrictionLoad", "RestrictionLex"])
        elif "PRLLX" == self.sb_option:  # PRLLX
            self.sbPrice(criteria1="RestrictionLoad", criteria2="RestrictionLex")
        elif "LPRLX" == self.sb_option:  # LPRLX
            self.sbVMLoad(criteria1="RestrictionPrice", criteria2="RestrictionLex")

        # four criterias
        elif "FVPRLLX" == self.sb_option:  # FVPRLLEX
            self.sbFixVariables(
                criteriaList=["RestrictionPrice", "RestrictionLoad", "RestrictionLex"]
            )
        elif "FVLPRLX" == self.sb_option:  # FVLPRLX
            self.sbFixVariables(
                criteriaList=["RestrictionLoad", "RestrictionPrice", "RestrictionLex"]
            )

        elif "sb_lex_col_binary" == self.sb_option:  # do tests for curiosity
            self.sbBinary()

    def sbBinary(self):
        self.RestrictionLexBinaryNumber()

    def sbFixVariables(self, criteriaList=None):
        """
        Fix values from maximum clique
        """
        vm_id = 0
        # print("Max cliques=", self.problem.max_clique)

        for inst in self.problem.max_clique[1]:

            for comp_id in self.problem.max_clique[0].keys():
                if inst in self.problem.max_clique[0][comp_id]:
                    self.RestrictionFixComponentOnVM(comp_id, vm_id, 1)
                elif (
                    self.problem.max_clique[0][comp_id][0] in self.problem.max_clique[1]
                ):
                    self.RestrictionFixComponentOnVM(comp_id, vm_id, 0)
            vm_id += 1

        # for comp_id in self.problem.max_clique:
        #     instances = self.problem.componentsList[comp_id].getInstances()
        #     print(instances, comp_id)

        #     start_id = vm_id
        #     # print("comp=",comp_id," instances:", instances)
        #     for instance in range(instances):
        #         self.RestrictionFixComponentOnVM(comp_id, vm_id, 1)
        #         for conflict_comp_id in self.problem.componentsList[comp_id].conflictComponentsList:
        #             self.RestrictionFixComponentOnVM(conflict_comp_id, vm_id, 0)

        #         vm_id += 1
        #         self.vm_with_offers[vm_id] = comp_id
        #         self.vmIds_for_fixedComponents.add(vm_id)
        #     stop_id = vm_id

        # if criteriaList is not None:    # FVLX -> Se aplica LX pe masini
        #     # print("comp=", comp_id, " interval[", start_id, ", ", stop_id, "]")
        #     self.sb(start_id, stop_id, criteriaList)
        if criteriaList is not None:
            # print("rest_of interval", " interval[", stop_id, ", ", self.nrVM, "]")
            self.sb(vm_id, self.nrVM, criteriaList)

    def sb(self, start_vm_index, end_vm_index, criteriaList=[]):
        criteriaList_size = len(criteriaList)
        for vm_id in range(start_vm_index, end_vm_index - 1):
            cr1_precondition = getattr(self, criteriaList[0])(vm_id)
            if criteriaList_size == 2:
                getattr(self, criteriaList[1])(
                    vm_id, additional_constraints=[cr1_precondition]
                )
            elif criteriaList_size == 3:
                cr2_precondition = getattr(self, criteriaList[1])(
                    vm_id, additional_constraints=[cr1_precondition]
                )
                getattr(self, criteriaList[2])(
                    vm_id, additional_constraints=[cr1_precondition, cr2_precondition]
                )

    def sbLex(self):
        self.sb(0, self.nrVM, criteriaList=["RestrictionLex"])

    def sbPrice(self, criteria1=None, criteria2=None):
        """
         order by price
        :return:
        """
        citeriaList = ["RestrictionPrice"]
        if criteria1 is not None:
            citeriaList.append(criteria1)
            if criteria2 is not None:
                citeriaList.append(criteria2)
        self.sb(0, self.nrVM, criteriaList=citeriaList)

    def sbVMLoad(self, criteria1=None, criteria2=None):
        """
         order by VM Load
        :return:
        """
        citeriaList = ["RestrictionLoad"]
        if criteria1 is not None:
            citeriaList.append(criteria1)
            if criteria2 is not None:
                citeriaList.append(criteria2)
        self.sb(0, self.nrVM, criteriaList=citeriaList)
