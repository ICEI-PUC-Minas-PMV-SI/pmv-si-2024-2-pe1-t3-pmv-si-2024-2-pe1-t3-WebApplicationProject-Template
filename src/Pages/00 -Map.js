function initMap() {
const defaultLocation = { lat: -19.9227916, lng: -43.9924877 };
const mapOptions = {
zoom: 12,
center: defaultLocation,
};

const map = new google.maps.Map(document.getElementById("map"), mapOptions);
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();
directionsRenderer.setMap(map);

function addMarker(location) {
const marker = new google.maps.Marker({
    position: { lat: location.lat, lng: location.lng },
    map: map,
    title: location.name,
});

const infoWindowContent = `
    <div style="font-size: 14px;">
        <strong>${location.name}</strong><br>
        Horário: ${location.hours}<br>
        Telefone: ${location.phone}<br>
        E-mail: <a href="mailto:${location.email}">${location.email}</a><br>
        <button id="get-directions-${location.lat}-${location.lng}">Como chegar</button>
    </div>
`;

const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
});

// Abre o infoWindow ao clicar no marcador
marker.addListener("click", () => {
    infoWindow.open(map, marker);
});

// Fecha o infoWindow ao clicar fora
google.maps.event.addListener(infoWindow, 'closeclick', () => {
    infoWindow.close();
});

// Adicione um listener para o botão de direções
google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
    const directionsButton = document.getElementById(`get-directions-${location.lat}-${location.lng}`);
    if (directionsButton) {
        directionsButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Impede que o clique feche o infoWindow
            getDirections(location);
        });
    }
});
}

function getDirections(destination) {
const userLocation = {
    lat: -19.9227916, // PUC Minas - Coração Eucarístico
    lng: -43.9924877
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            directionsRenderer.setMap(map); // Certifique-se de definir o mapa antes de desenhar a rota
            calculateAndDisplayRoute(directionsService, directionsRenderer, currentLocation, destination);
        },
        () => {
            // Quando não há geolocalização, utiliza a localização da PUC Minas
            directionsRenderer.setMap(map); // Certifique-se de definir o mapa antes de desenhar a rota
            calculateAndDisplayRoute(directionsService, directionsRenderer, userLocation, destination);
        }
    );
} else {
    // Se o navegador não suportar geolocalização, utiliza a PUC Minas como ponto de partida
    directionsRenderer.setMap(map); // Certifique-se de definir o mapa antes de desenhar a rota
    calculateAndDisplayRoute(directionsService, directionsRenderer, userLocation, destination);
}
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, start, end) {
directionsService.route(
    {
        origin: start,
        destination: { lat: end.lat, lng: end.lng },
        travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(response);
        } else {
            window.alert("Directions request failed due to " + status);
        }
    }
);
}

const locations = [
        { lat: -19.9408104, lng: -44.0015892, name: "MG Recicla Reciclagem de Lixo Eletrônico", hours: "08:00 - 18:00", phone: "(31) 1234-5678", email: "contato@mgrecicla.com.br" },
        { lat: -19.9579473, lng: -43.9945943, name: "Reciclagem Tc", hours: "09:00 - 17:00", phone: "(31) 2345-6789", email: "contato@reciclagemtc.com.br" },
        { lat: -19.9431076, lng: -44.0048183, name: "Reciclagem Horizonte BH", hours: "08:00 - 17:00", phone: "(31) 3456-7890", email: "contato@reciclagemhorizonte.com.br" },
        { lat: -19.9570892, lng: -44.0349695, name: "BH Recicla Gestão de Resíduos", hours: "08:00 - 18:00", phone: "(31) 4567-8901", email: "contato@bhrecicla.com.br" },
        { lat: -19.9719886, lng: -44.018167, name: "Reciclando BH", hours: "08:00 - 17:00", phone: "(31) 5678-9012", email: "contato@reciclandobh.com.br" },
        { lat: -19.9762348, lng: -44.0288099, name: "URPV - Unidade de Recebimento de Pequenos Volumes - Átila de Paiva", hours: "08:00 - 17:00", phone: "(31) 6789-0123", email: "contato@urpv.com.br" },
        { lat: -19.9749688, lng: -44.0200643, name: "Pev Bhtrans - Barreiro", hours: "08:00 - 18:00", phone: "(31) 7890-1234", email: "contato@pevbhtrans.com.br" },
        { lat: -19.9227916, lng: -43.9924877, name: "PUC Minas - Coração Eucarístico", hours: "08:00 - 20:00", phone: "(31) 8901-2345", email: "contato@pucminas.br" },
        { lat: -19.9294547, lng: -44.0547162, name: "Coletar Reciclagem de Eletrônicos", hours: "09:00 - 17:00", phone: "(31) 9012-3456", email: "contato@coletarreciclagem.com.br" },
        { lat: -19.925871, lng: -43.9527431, name: "Ecoponto E-MILE de Lixo Eletrônico (CTRL+Play)", hours: "08:00 - 18:00", phone: "(31) 0123-4567", email: "contato@ecopontoemile.com.br" },
        { lat: -19.9005906, lng: -43.9621804, name: "Reciclar", hours: "08:00 - 17:00", phone: "(31) 1234-5678", email: "contato@reciclar.com.br" },
    ];

    locations.forEach(location => {
        addMarker(location);
    });
}