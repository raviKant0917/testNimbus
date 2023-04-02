NIMBUS BACKEND 2K23
##
To start the backend follow:
	1. clone the repo
	2. cd testNimbus
	3. npm i 
	4. add firebase serviceAccountConfig file in your project
			![enter image description here](https://cdn-images-1.medium.com/max/800/1*JSd2ldUB28v4bSILlypfXA.png)
			![enter image description here](https://cdn-images-1.medium.com/max/800/1*DnA2gelvhAchJ2ywiOPWug.png)![enter image description here](https://cdn-images-1.medium.com/max/800/1*Pv9SqC1GqCQuOWG3WQZanQ.png)
				{
						"type": "service_account",
						"project_id": "<projetId>",
						"private_key_id": "<privateKeyId>",
						"private_key": "<privateKey>",
						"client_email": "<clientEmail>",
						"client_id": "<clientId>",
						"auth_uri": "<authUri>",
						"token_uri": "<tokenUri>",
						"auth_provider_x509_cert_url": "<authProvider>",
						"client_x509_cert_url": "<clientCertUrl>"
				}			


5. set following environment variables = 
			a. PASSWORD - mongodb database password
			b. USER_NAME - mongodb database username
			now get these below env varibles from project settings in your fiebase
			c. private_key_id
			d. private_key
			e. client_id
				these three can be obtained from firebase serviceAccountConfig file

##
Now finally start the backend on 8050 localhost port
##
you need to keep in mind to provide firebase idToken for every request in headers as - **Bearer  {Token}** exclude " " in actual request.

##

All done Good to go!
Happy backending 😎
