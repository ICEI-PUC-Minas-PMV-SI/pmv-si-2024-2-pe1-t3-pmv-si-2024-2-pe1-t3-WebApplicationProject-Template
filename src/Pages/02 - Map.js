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

  let userLocation = defaultLocation; // Define a localização padrão como PUC Minas
    
    const marker = new google.maps.Marker({
      position: centralLocation,
      map: { lat: -19.9227916, lng: -43.9924877 },
      title: "Minha empresa",
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });

  // Tenta obter a geolocalização do usuário
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(userLocation); // Centraliza o mapa na localização do usuário
      },
      () => {
        // Se o usuário negar, mantém a localização padrão
        console.log("Geolocalização negada. Usando localização padrão.");
      }
    );
  } else {
    console.log("Navegador não suporta geolocalização.");
  }

  const locations = [
    // Array de locais de reciclagem
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

  const markers = []; // Array para armazenar os marcadores

  function addMarker(location = false) {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
      });

    const infoWindowContent = `
          <div style="font-size: 14px;">
              <strong>${location.name}</strong><br>
              Horário: ${location.hours}<br>
              Telefone: ${location.phone || location.contact}<br>
              E-mail: ${location.email ? `<a href="mailto:${location.email}">${location.email}</a><br>` : ''}
              <button id="get-directions-${location.lat}-${location.lng}">Como chegar</button>
          </div>
      `;

    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      const directionsButton = document.getElementById(`get-directions-${location.lat}-${location.lng}`);
      if (directionsButton) {
        directionsButton.addEventListener("click", (e) => {
          e.stopPropagation(); // Impede que o clique feche o infoWindow
          getDirections(location);
        });
      }
    });

    markers.push(marker); // Adiciona o marcador ao array de marcadores
  }

  function getDirections(destination) {
    const request = {
      origin: userLocation,
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      } else {
        console.error("Não foi possível obter as direções: " + status);
      }
    });
  }

  // Função de filtragem
  function filterMarkers() {
      const showLocations = document.getElementById("filter-material").checked;

    // Limpar marcadores anteriores do mapa
    markers.forEach(marker => marker.setMap(null)); // Remove os marcadores do mapa
    markers.length = 0; // Limpa o array de marcadores

    // Adicionar marcadores de locais de reciclagem que correspondem ao filtro
    locations.forEach(location => {
      if (selectedMaterial === "" || location.materials.some(material => material.toLowerCase().trim() === selectedMaterial)) {
        addMarker(location); // Adiciona o marcador se corresponder
      }
    });

  // Adiciona eventos de clique ao botão de filtro
  document.getElementById("filter-button").addEventListener("click", filterMarkers);

  // Adiciona evento de mudança ao toggle de indústrias
  document.getElementById("filter-material").addEventListener("change", filterMarkers);

  // Adiciona todos os marcadores inicialmente
  filterMarkers();
}