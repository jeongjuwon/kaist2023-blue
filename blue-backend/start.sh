#!/bin/bash

./gradlew clean && ./gradlew build
java -jar ./build/libs/KaistSampleAPIServer06-0.0.1-SNAPSHOT.jar