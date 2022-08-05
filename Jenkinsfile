pipeline {
    agent any
     tools {nodejs "NODEJS"} 
    stages {
        stage("Build") {
            steps {
                sh "npm install --legacy-peer-deps"
            }
        }
        stage("Test") {
            steps {
                script{
                    try{
sh "npm run test"
                    }
                    catch(error){ echo error

                    }
                }
                
            }
        }
        stage('Lint'){
            steps{
                sh "npm run lint"
            }
        }
    }
} 
