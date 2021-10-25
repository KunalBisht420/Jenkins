pipeline {
    agent{
        docker{
            label 'windows'
            image 'mcr.microsoft.com/powershell'
            image 'node:alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}