pipeline {
    agent any
     tools {nodejs "NODEJS"} 
    stages {
        stage("Install") {
            steps {
                sh "npm install"
            }
        }
        stage("Build") {
            steps {
                sh "npm run build"
            }
        }
    }
} 
