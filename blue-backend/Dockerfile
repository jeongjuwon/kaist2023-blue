FROM gradle:8.4.0-jdk17
COPY . . 
RUN chmod +x gradlew
RUN ./gradlew clean
RUN ./gradlew build
ENTRYPOINT ["java","-jar","./build/libs/KaistSampleAPIServer06-0.0.1-SNAPSHOT.jar"]
EXPOSE 8091