pipeline {
    agent any
     tools {nodejs "NODEJS"} 
    stages {
        stage("Build") {
            steps {
                sh "npm run install --legacy-peer-deps"
            }
        }
        stage("Test") {
            steps {
                sh "npm run test"
            }
        }
        
    }
} 
