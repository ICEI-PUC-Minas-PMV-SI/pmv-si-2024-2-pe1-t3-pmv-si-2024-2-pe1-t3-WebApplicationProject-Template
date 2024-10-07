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

    const industries = [
        { name: "Indústria A", lat: -19.928600, lng: -43.985500, hours: "Segunda a Sexta: 08:00 - 17:00", contact: "(31) 1234-5678", materials: ["lixo hospitalar"] },
        { name: "Empresa B", lat: -19.913500, lng: -44.020000, hours: "Segunda a Sexta: 09:00 - 18:00", contact: "(31) 2345-6789", materials: ["resíduos eletrônicos"] },
        { name: "Indústria C", lat: -19.953000, lng: -44.005200, hours: "Segunda a Sexta: 07:30 - 16:30", contact: "(31) 3456-7890", materials: ["material radioativo"] },
        { name: "Empresa D", lat: -19.948700, lng: -44.030800, hours: "Segunda a Sábado: 08:00 - 16:00", contact: "(31) 4567-8901", materials: ["lâmpadas fluorescentes"] },
        { name: "Indústria E", lat: -19.905300, lng: -44.014500, hours: "Segunda a Sexta: 10:00 - 19:00", contact: "(31) 5678-9012", materials: ["baterias elétricas"] },
        { name: "Empresa F", lat: -19.950000, lng: -44.040000, hours: "Segunda a Sexta: 08:30 - 17:30", contact: "(31) 6789-0123", materials: ["resíduos de construção"] },
        { name: "Indústria G", lat: -19.900800, lng: -44.007500, hours: "Segunda a Sexta: 09:00 - 18:00", contact: "(31) 7890-1234", materials: ["resíduos químicos perigosos"] },
        { name: "Empresa H", lat: -19.943400, lng: -44.020200, hours: "Segunda a Sexta: 07:00 - 16:00", contact: "(31) 8901-2345", materials: ["biomateriais"] },
        { name: "Indústria I", lat: -19.968000, lng: -44.015000, hours: "Segunda a Sábado: 08:00 - 17:00", contact: "(31) 9012-3456", materials: ["resíduos de solventes"] },
        { name: "Empresa J", lat: -19.930600, lng: -44.004000, hours: "Segunda a Sexta: 10:00 - 19:00", contact: "(31) 0123-4567", materials: ["lixo industrial"] },
        { name: "Indústria K", lat: -19.956500, lng: -44.027000, hours: "Segunda a Sexta: 08:00 - 17:00", contact: "(31) 2345-6788", materials: ["resíduos de óleo"] },
        { name: "Empresa L", lat: -19.944000, lng: -44.022800, hours: "Segunda a Sexta: 09:00 - 18:00", contact: "(31) 3456-7899", materials: ["materiais de embalagem perigosos"] },
        { name: "Indústria M", lat: -19.902000, lng: -44.018300, hours: "Segunda a Sexta: 07:30 - 16:30", contact: "(31) 4567-8902", materials: ["resíduos de papel químico"] },
        { name: "Empresa N", lat: -19.951200, lng: -44.032500, hours: "Segunda a Sábado: 08:00 - 17:00", contact: "(31) 5678-9013", materials: ["resíduos de agroquímicos"] },
        { name: "Indústria O", lat: -19.921800, lng: -44.004600, hours: "Segunda a Sexta: 10:00 - 19:00", contact: "(31) 6789-0124", materials: ["resíduos de farmácias"] },
        { name: "Empresa P", lat: -19.934800, lng: -44.041800, hours: "Segunda a Sexta: 08:30 - 17:30", contact: "(31) 7890-1236", materials: ["resíduos de plásticos contaminados"] },
        { name: "Indústria Q", lat: -19.938200, lng: -43.992000, hours: "Segunda a Sexta: 09:00 - 18:00", contact: "(31) 8901-2346", materials: ["lixo tóxico"] },
        { name: "Empresa R", lat: -19.970000, lng: -44.030500, hours: "Segunda a Sexta: 07:00 - 16:00", contact: "(31) 9012-3457", materials: ["resíduos de limpeza"] },
        { name: "Indústria S", lat: -19.947200, lng: -44.038000, hours: "Segunda a Sábado: 08:00 - 17:00", contact: "(31) 0123-4568", materials: ["resíduos de metal"] },
        { name: "Empresa T", lat: -19.949500, lng: -44.012500, hours: "Segunda a Sexta: 10:00 - 19:00", contact: "(31) 1234-5679", materials: ["resíduos de embalagem industrial"] },
        { name: "Indústria U", lat: -19.910000, lng: -43.997000, hours: "Segunda a Sexta: 08:00 - 17:00", contact: "(31) 2345-6780", materials: ["resíduos perigosos"] },
        { name: "Empresa V", lat: -19.898700, lng: -44.021200, hours: "Segunda a Sexta: 09:00 - 18:00", contact: "(31) 3456-7891", materials: ["resíduos de bateria"] },
        { name: "Indústria W", lat: -19.913200, lng: -43.988600, hours: "Segunda a Sexta: 07:30 - 16:30", contact: "(31) 4567-8903", materials: ["material biológico"] },
        { name: "Empresa X", lat: -19.924000, lng: -44.034000, hours: "Segunda a Sábado: 08:00 - 17:00", contact: "(31) 5678-9014", materials: ["resíduos de óleo usado"] },
        { name: "Indústria Y", lat: -19.905700, lng: -43.990900, hours: "Segunda a Sexta: 10:00 - 19:00", contact: "(31) 6789-0125", materials: ["resíduos de vidro"] },
        { name: "Empresa Z", lat: -19.931900, lng: -44.027300, hours: "Segunda a Sexta: 08:30 - 17:30", contact: "(31) 7890-1236", materials: ["resíduos de lâmpadas"] }
    ];

    const markers = []; // Array para armazenar os marcadores

    function addMarker(location, isIndustry = false) {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
            icon: isIndustry ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : null, // Usa um ícone verde para as indústrias
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
        const selectedMaterial = document.getElementById("material-filter").value.toLowerCase().trim();
        const showIndustries = document.getElementById("toggle-industries").checked;

        // Limpar marcadores anteriores do mapa
        markers.forEach(marker => marker.setMap(null)); // Remove os marcadores do mapa
        markers.length = 0; // Limpa o array de marcadores

        // Adicionar marcadores de locais de reciclagem que correspondem ao filtro
        locations.forEach(location => {
            if (selectedMaterial === "" || location.materials.some(material => material.toLowerCase().trim() === selectedMaterial)) {
                addMarker(location); // Adiciona o marcador se corresponder
            }
        });

        // Adicionar marcadores de indústrias se o toggle estiver ativo e se corresponderem ao filtro
        if (showIndustries) {
            industries.forEach(industry => {
                if (selectedMaterial === "" || industry.materials.some(material => material.toLowerCase().trim() === selectedMaterial)) {
                    addMarker(industry, true); // Adiciona o marcador com o ícone verde
                }
            });
        }
    }

    // Adiciona eventos de clique ao botão de filtro
    document.getElementById("filter-button").addEventListener("click", filterMarkers);

    // Adiciona evento de mudança ao toggle de indústrias
    document.getElementById("toggle-industries").addEventListener("change", filterMarkers);

    // Adiciona todos os marcadores inicialmente
    filterMarkers();
}
