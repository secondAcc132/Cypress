pipeline {
 agent {
  docker {
   image 'cypress/base:16.13.0'
   args '-u root:root'
  }
 }

stages {
  stage('Download the dependencies') {
    environment {
                  HOME="."
                }
   steps {
    sh "npm install"
   }
  }

  stage('Build and test') {
    steps {
      sh "npm run build:and:test"
    }
  }
}

}