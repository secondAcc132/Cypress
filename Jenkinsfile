pipeline {
 agent {
  docker {
   image 'cypress/base:16.13.0'
   args '-u root:root'
  }
 }

stages {
  stage('Download the dependencies') {
   steps {
    sh "npm install"
   }
  }

  stage('Build and test') {
   sh "npm run build:and:test"
  }
}

}