#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Eventful.API/Eventful.API.csproj", "Eventful.API/"]
COPY ["../Shared Components/EventManager/Event.csproj", "../Shared Components/EventManager/"]
RUN dotnet restore "Eventful.API/Eventful.API.csproj"
COPY . .
WORKDIR "/src/Eventful.API"
RUN dotnet build "Eventful.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Eventful.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Eventful.API.dll"]