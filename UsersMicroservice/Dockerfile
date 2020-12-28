#pull dotnet sdk image version 5 from docker hub for building the project
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

#change work dir to /src
WORKDIR /src

#copy the initial project files
COPY UsersMicroservice.csproj .

#restore the project files to work on linux 
#(as we developed this app on Windows, we need to build version for Linux)
RUN dotnet restore

#copy rest files of the project to the container
COPY . .

#command to build the project inside the container (the project will be built for linux platform)
RUN dotnet publish -c release -o /app

#pull the runtime dotnet 5.0 from docker hub
FROM mcr.microsoft.com/dotnet/aspnet:5.0

WORKDIR /app

COPY --from=build /app .

#command to run a dotnet app (this works also the run the app in the container)
ENTRYPOINT ["dotnet", "UsersMicroservice.dll"]
