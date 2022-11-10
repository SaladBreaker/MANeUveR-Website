function copyText(textToCopy) {
   // Copy the text inside the text field
  navigator.clipboard.writeText(textToCopy);
}

async function copyText1() {
  // Copy the text inside the text field
  copyText("{\n" +
      "  \"application\" : \"SecureBillingEmail\",\n" +
      "  \"components\" :[\n" +
      "    {\n" +
      "      \"id\": 1, \"name\" : \"Coding Service\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 4096},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 1024},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {\"Compute\": 1, \"Storage\":1, \"Network\":0}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 2, \"name\" : \"Security Manager\",\n" +
      "      \"Compute\": {\"CPU\":2, \"GPU\":\"false\", \"Memory\": 2048},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 512},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 3, \"name\" : \"Gateway\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 4096},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 512},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 4, \"name\" : \"SQLServer\",\n" +
      "      \"Compute\": {\"CPU\":2, \"GPU\":\"false\", \"Memory\": 512},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 2000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 5, \"name\" : \"LoadBalancer\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 2048},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 500},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 6, \"name\" : \"Test\",\n" +
      "      \"Compute\": {\"CPU\":2, \"GPU\":\"false\", \"Memory\": 512},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 2000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    }\n" +
      "  ],\n" +
      "  \"IP\" : {\"publicIPs\": 1, \"IPType\": \"IP4\"},\n" +
      "  \"restrictions\" : [\n" +
      "    {\"type\":\"Conflicts\", \"alphaCompId\":1, \"compsIdList\":[2, 3, 4, 5]},\n" +
      "    {\"type\":\"Conflicts\", \"alphaCompId\":5, \"compsIdList\":[3, 4]},\n" +
      "    {\"type\":\"EqualBound\",  \"compsIdList\":[1], \"bound\": 1},\n" +
      "    {\"type\":\"EqualBound\",  \"compsIdList\":[5], \"bound\": 1}\n" +
      "  ]\n" +
      "} \n");
  await afterCopy("button-1")
}

async function copyText2() {
   // Copy the text inside the text field
  copyText("{\n" +
      "  \"application\" : \"SecureWebContainer\",\n" +
      "  \"components\" :[\n" +
      "    {\n" +
      "      \"id\": 1, \"name\" : \"Balancer\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 2048},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 500},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 2, \"name\" : \"Apache\",\n" +
      "      \"Compute\": {\"CPU\":2, \"GPU\":\"false\", \"Memory\": 512},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 1000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    \n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 3, \"name\" : \"Nginx\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 2048},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 1000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 4, \"name\" : \"IDSServer\",\n" +
      "      \"Compute\": {\"CPU\":8, \"GPU\":\"false\", \"Memory\": 16000},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 2000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\n" +
      "      \"id\": 5, \"name\" : \"IDSAgent\",\n" +
      "      \"Compute\": {\"CPU\":1, \"GPU\":\"false\", \"Memory\": 256},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 250},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"\",\n" +
      "      \"preferences\": {}\n" +
      "    }\n" +
      "  ],\n" +
      "  \"IP\" : {\"publicIPs\": 1, \"IPType\": \"IP4\"},\n" +
      "  \"comment-restrictions\": \"Number 3 from LowerBound below is LoR=LevelOfRedundancy; FullDeployment: compsIdList: the list of components that component alpha is in conflict with\",\n" +
      "  \"restrictions\" : [\n" +
      "    {\"type\":\"Conflicts\", \"alphaCompId\":1, \"compsIdList\":[2, 3, 4, 5]},\n" +
      "    {\"type\":\"Conflicts\", \"alphaCompId\":2, \"compsIdList\":[3]},\n" +
      "    {\"type\":\"EqualBound\",  \"compsIdList\":[1], \"bound\": 1},\n" +
      "    {\"type\":\"LowerBound\",  \"compsIdList\":[2, 3], \"bound\": 3},\n" +
      "    {\"type\":\"Conflicts\", \"alphaCompId\":4, \"compsIdList\":[1, 2, 3, 5]},\n" +
      "    {\"type\":\"FullDeployment\", \"alphaCompId\":5, \"compsIdList\":[4, 1]},\n" +
      "    {\"type\":\"OneToManyDependency\", \"alphaCompId\":4, \"betaCompId\":5, \"number\": 10}\n" +
      "  ]\n" +
      "}\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n");
  await afterCopy("button-2")
}

async function copyText3() {
   // Copy the text inside the text field
  copyText("{\n" +
      "  \"application\" : \"WordPress3\",\n" +
      "  \"comment-general\": \"From the Zephyrus-ASE paper: at least 3 replicas of Wordpress or at least 7 DNS (we can not capture OR in the UI, we have here the 3 Wordpress replicas); Answer: minimum 4VMs\",\n" +
      "  \"components\" :[\n" +
      "    {\"id\": 1, \"name\" : \"WordPress\",\n" +
      "      \"Compute\": {\"CPU\":2, \"GPU\":\"false\", \"Memory\": 512},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 1000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"Linux\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\"id\": 2, \"name\" : \"MySQL\",\n" +
      "      \"Compute\": {\"CPU\":2, \"GPU\":\"false\", \"Memory\": 512},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 2000},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"Linux\",\n" +
      "      \"preferences\": {}\n" +
      "  \n" +
      "    },\n" +
      "    {\"id\": 3, \"name\" : \"DNSLoadBalancer\",\n" +
      "      \"comments\": \"As load balancers, either DNS or HTTP\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 2048},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 500},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"Linux\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\"id\": 4, \"name\" : \"HTTPLoadBalancer\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 2048},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 500},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"Linux\",\n" +
      "      \"preferences\": {}\n" +
      "    },\n" +
      "    {\"id\": 5, \"name\" : \"Varnish\",\n" +
      "      \"Compute\": {\"CPU\":4, \"GPU\":\"false\", \"Memory\": 4000},\n" +
      "      \"Storage\": {\"StorageType\": \"HDD\", \"StorageSize\": 500},\n" +
      "      \"Network\": {},\n" +
      "      \"keywords\": [],\n" +
      "      \"operatingSystem\": \"Linux\",\n" +
      "      \"preferences\": {}\n" +
      "    }\n" +
      "  ],\n" +
      "  \"IP\" : {\"publicIPs\": 1, \"IPType\": \"IP4\"},\n" +
      "  \"comment-restrictions\": \"RequireProvideDependency to be read as: for 1 instance of component with id 2 there must be at least \",\n" +
      "  \"restrictions\" : [{\"type\":\"LowerBound\",  \"compsIdList\":[1], \"bound\": -1},\n" +
      "                    {\"type\":\"LowerBound\",  \"compsIdList\":[2], \"bound\": 2},\n" +
      "                    {\"type\":\"LowerBound\",  \"compsIdList\":[5], \"bound\": 2},\n" +
      "                    {\"type\":\"RequireProvideDependency\", \"alphaCompId\":1, \"betaCompId\":3,\n" +
      "                      \"alphaCompIdInstances\":1, \"betaCompIdInstances\":7},\n" +
      "                    {\"type\":\"UpperBound\",  \"compsIdList\":[3], \"bound\": 1},\n" +
      "                    {\"type\":\"RequireProvideDependency\", \"alphaCompId\":1, \"betaCompId\":4,\n" +
      "                      \"alphaCompIdInstances\":1, \"betaCompIdInstances\":3},\n" +
      "                    {\"type\":\"RequireProvideDependency\", \"alphaCompId\":1, \"betaCompId\":2,\n" +
      "                      \"alphaCompIdInstances\":2, \"betaCompIdInstances\":3},\n" +
      "                    {\"type\":\"AlternativeComponents\", \"alphaCompId\":3, \"betaCompId\":4},\n" +
      "                    {\"type\":\"Conflicts\", \"alphaCompId\":3, \"compsIdList\":[1, 2, 5]},\n" +
      "                    {\"type\":\"Conflicts\", \"alphaCompId\":4, \"compsIdList\":[1, 2, 5]},\n" +
      "                    {\"type\":\"Conflicts\", \"alphaCompId\":5, \"compsIdList\":[2, 3, 4]}\n" +
      "  ]\n" +
      "  }");
  await afterCopy("button-3")
}

async function afterCopy(buttonId) {
  var button = document.getElementById(buttonId);
  var initialText = button.innerText;
  button.innerText = "Copied!";
  await new Promise(r => setTimeout(r, 2000));
  button.innerText = initialText;
}
