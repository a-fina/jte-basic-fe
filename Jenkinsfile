pipeline {
    agent {
        docker {
            image 'cypress/browsers:node12.14.1-chrome85-ff81'
        }
    }
    environment {
        // Override HOME to WORKSPACE
        HOME = "${WORKSPACE}"
        NO_COLOR = "1"
    }
    stages {
        stage('Install Cypress Dependencies') { 
            steps {
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        stage('Run Cypress TOP Test') { 
            steps {
                sh 'npm test & npm run cy:run'
            }
        }
    }
    post {
        always {
            archiveArtifacts 'cypress/videos/infocert/top/*.mp4,cypress/videos/**/*.mp4,cypress/screenshots/**/**,cypress/report/**/**,cypress/report/**/*.html,cypress/downloads/**/**,cypress/downloads/*.*'
        }
    }
}