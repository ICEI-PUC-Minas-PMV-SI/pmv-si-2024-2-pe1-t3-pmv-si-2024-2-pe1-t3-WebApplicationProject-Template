let map;
let geocoder;
let directionsService;
let directionsRenderer;
let markers = [];
let greenMarkers = [];
let infoWindows = [];
const defaultLocation = { lat: -19.9208, lng: -43.9378 }; // Localização padrão se o acesso à geolocalização for negado

// Locais de Reciclagem (centros de coleta)
const locations = [
  { lat: -19.9408104, lng: -44.0015892, name: "MG Recicla Reciclagem de Lixo Eletrônico", hours: "08:00 - 18:00", phone: "(31) 1234-5678", email: "contato@mgrecicla.com.br", materials: ["lixo hospitalar"] },
  { lat: -19.9005906, lng: -43.9621804, name: "Reciclar", hours: "08:00 - 17:00", phone: "(31) 1234-5678", email: "contato@reciclar.com.br", materials: ["resíduos de óleo", "lixo tóxico"] },
  { lat: -19.9431076, lng: -44.0048183, name: "Reciclagem Horizonte BH", hours: "08:00 - 17:00", phone: "(31) 3456-7890", email: "contato@reciclagemhorizonte.com.br", materials: ["baterias elétricas", "lâmpadas fluorescentes"] },
  { lat: -19.9570892, lng: -44.0349695, name: "BH Recicla Gestão de Resíduos", hours: "08:00 - 18:00", phone: "(31) 4567-8901", email: "contato@bhrecicla.com.br", materials: ["baterias elétricas", "lâmpadas fluorescentes"] },
  { lat: -19.9719886, lng: -44.018167, name: "Reciclando BH", hours: "08:00 - 17:00", phone: "(31) 5678-9012", email: "contato@reciclandobh.com.br", materials: ["biomateriais", "resíduos de óleo"] },
  { lat: -19.9762348, lng: -44.0288099, name: "URPV - Unidade de Recebimento de Pequenos Volumes - Átila de Paiva", hours: "08:00 - 17:00", phone: "(31) 6789-0123", email: "contato@urpv.com.br", materials: ["biomateriais", "resíduos de óleo"] },
  { lat: -19.9749688, lng: -44.0200643, name: "Pev Bhtrans - Barreiro", hours: "08:00 - 18:00", phone: "(31) 7890-1234", email: "contato@pevbhtrans.com.br", materials: ["resíduos de lâmpadas", "resíduos de metal"] },
  { lat: -19.9227916, lng: -43.9924877, name: "PUC Minas - Coração Eucarístico", hours: "08:00 - 20:00", phone: "(31) 8901-2345", email: "contato@pucminas.br", materials: ["baterias elétricas"] },
  { lat: -19.9294547, lng: -44.0547162, name: "Coletar Reciclagem de Eletrônicos", hours: "09:00 - 17:00", phone: "(31) 9012-3456", email: "contato@coletarreciclagem.com.br", materials: ["resíduos de plásticos contaminados", "resíduos de embalagem industrial"] },
  { lat: -19.925871, lng: -43.9527431, name: "Ecoponto E-MILE de Lixo Eletrônico (CTRL+Play)", hours: "08:00 - 18:00", phone: "(31) 0123-4567", email: "contato@ecopontoemile.com.br", materials: ["lixo industrial", "Celulares", "baterias elétricas", "lâmpadas fluorescentes"] },
  { lat: -19.9579473, lng: -43.9945943, name: "Reciclagem Tc", hours: "09:00 - 17:00", phone: "(31) 2345-6789", email: "contato@reciclagemtc.com.br", materials: ["resíduos eletrônicos", "baterias elétricas"] },
  // ... outros locais de reciclagem
];

// Função para inicializar o mapa
function initMap() {
    geocoder = new google.maps.Geocoder();
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 14,
    });

    directionsRenderer.setMap(map);

    // Adicionar centros de coleta ao iniciar o mapa
    addLocationMarkers();

    // Adicionar marcador fixo verde para "Minha Empresa"
    addEmpresaMarker();

    // Obter geolocalização do usuário
    getUserLocation();
}

// Obter a localização do usuário
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(userLocation);
                addCentralMarker(userLocation); // Adiciona o marcador na localização do usuário
            },
            () => {
                // Se o usuário negar acesso, centralizar na localização padrão
                map.setCenter(defaultLocation);
                addCentralMarker(defaultLocation); // Adiciona o marcador na localização padrão
            }
        );
    } else {
        // Caso o navegador não suporte geolocalização, usar local padrão
        map.setCenter(defaultLocation);
        addCentralMarker(defaultLocation);
    }
}

// Adicionar marcador central (usuário ou padrão)
function addCentralMarker(location) {
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Você está aqui",
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Marcador azul para a localização do usuário
        },
    });
}

// Adicionar marcadores dos centros de coleta
function addLocationMarkers() {
    locations.forEach((location) => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });

        // InfoWindow para mostrar detalhes do local
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.name}</h3><p>Materiais: ${location.materials.join(", ")}</p>`,
        });

        // Evento para abrir a InfoWindow ao clicar no marcador
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        markers.push(marker);
        infoWindows.push(infoWindow);
    });
}

// Adicionar marcador fixo verde para "Minha Empresa"
function addEmpresaMarker() {
    const empresaLocation = { lat: -19.9225, lng: -43.9402 }; // Local aleatório para a empresa

    const empresaMarker = new google.maps.Marker({
        position: empresaLocation,
        map: map,
        title: "Minha Empresa",
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png", // Ícone de marcador verde
        },
    });

    // InfoWindow para "Minha Empresa"
    const empresaInfoWindow = new google.maps.InfoWindow({
        content: `
            <img src="../Images/empresa.jpg" style="width: 200px; height: auto;">
            <h3>Minha Empresa</h3>
        
        `,
    });

    empresaMarker.addListener("click", () => {
        empresaInfoWindow.open(map, empresaMarker);
    });

    greenMarkers.push(empresaMarker);
}

// Inicializar o mapa quando a janela carregar
window.onload = initMap;
