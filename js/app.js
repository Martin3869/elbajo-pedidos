// ==================== APP DE PEDIDOS - SISTEMA COMERCIAL ====================
// Version: 2.0 - Sin servidor, configurable para cualquier negocio
// ============================================================================

// ==================== CONFIGURACION POR DEFECTO ====================
const CONFIG_DEFAULT = {
    nombreEmpresa: '',
    telefonoSuperusuario: '',
    pinSuperusuario: '',
    logoURL: 'img/logo.png',
    configurado: false,
    version: '2.0'
};

// ==================== PRODUCTOS INICIALES ====================
const productosIniciales = [
    // Gaseosas - Linea Coca-Cola
    { id: 1, nombre: "Coca / Coca cero / Fanta / Sprite 2 lt cajon", precioCosto: 14000, porcentaje: 20, precio: 16800, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 2, nombre: "Coca 1 litro cajon", precioCosto: 11250, porcentaje: 20, precio: 13500, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 3, nombre: "Coca 2.5 cajon", precioCosto: 16250, porcentaje: 20, precio: 19500, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 4, nombre: "Coca 3 lt", precioCosto: 19167, porcentaje: 20, precio: 23000, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 5, nombre: "Coca 375cc x 6 Pack", precioCosto: 4833, porcentaje: 20, precio: 5800, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 6, nombre: "Coca cero 2 lt descartable", precioCosto: 14167, porcentaje: 20, precio: 17000, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 7, nombre: "Fanta / Sprite 500 cc x 6 Pack", precioCosto: 5583, porcentaje: 20, precio: 6700, categoria: "Gaseosas - Linea Coca-Cola" },
    { id: 8, nombre: "Lata Coca 500cc x 6 Pack", precioCosto: 5500, porcentaje: 20, precio: 6600, categoria: "Gaseosas - Linea Coca-Cola" },
    
    // Gaseosas - Linea Pepsi
    { id: 9, nombre: "Lata Pepsi Pack", precioCosto: 13750, porcentaje: 20, precio: 16500, categoria: "Gaseosas - Linea Pepsi" },
    { id: 10, nombre: "Pepsi Black 3 lt", precioCosto: 10833, porcentaje: 20, precio: 13000, categoria: "Gaseosas - Linea Pepsi" },
    { id: 11, nombre: "Pepsi Black 2 lt", precioCosto: 11667, porcentaje: 20, precio: 14000, categoria: "Gaseosas - Linea Pepsi" },
    { id: 12, nombre: "Pepsi 500cc x 12 Pack", precioCosto: 7083, porcentaje: 20, precio: 8500, categoria: "Gaseosas - Linea Pepsi" },
    { id: 13, nombre: "Pepsi 3 lt", precioCosto: 11250, porcentaje: 20, precio: 13500, categoria: "Gaseosas - Linea Pepsi" },
    { id: 14, nombre: "Pepsi 2 lt", precioCosto: 11167, porcentaje: 20, precio: 13400, categoria: "Gaseosas - Linea Pepsi" },
    { id: 15, nombre: "Mirinda naranja 3 lt", precioCosto: 9833, porcentaje: 20, precio: 11800, categoria: "Gaseosas - Linea Pepsi" },
    { id: 16, nombre: "Mirinda naranja 2.25 lt", precioCosto: 11333, porcentaje: 20, precio: 13600, categoria: "Gaseosas - Linea Pepsi" },
    { id: 17, nombre: "Mirinda manzana 3 lt", precioCosto: 9833, porcentaje: 20, precio: 11800, categoria: "Gaseosas - Linea Pepsi" },
    { id: 18, nombre: "Mirinda / Seven 2 lt", precioCosto: 11333, porcentaje: 20, precio: 13600, categoria: "Gaseosas - Linea Pepsi" },
    { id: 19, nombre: "Seven free 2 lt", precioCosto: 11667, porcentaje: 20, precio: 14000, categoria: "Gaseosas - Linea Pepsi" },
    { id: 20, nombre: "Seven 3 lt", precioCosto: 11667, porcentaje: 20, precio: 14000, categoria: "Gaseosas - Linea Pepsi" },
    
    // Gaseosas Economicas / Aguas
    { id: 21, nombre: "Torasso 3 lt", precioCosto: 5000, porcentaje: 20, precio: 6000, categoria: "Gaseosas Economicas / Aguas" },
    { id: 22, nombre: "Secco 3 lt", precioCosto: 4917, porcentaje: 20, precio: 5900, categoria: "Gaseosas Economicas / Aguas" },
    { id: 23, nombre: "Soda sifon Torasso 2 lt", precioCosto: 5000, porcentaje: 20, precio: 6000, categoria: "Gaseosas Economicas / Aguas" },
    { id: 24, nombre: "Agua Nestle 2.25 lt", precioCosto: 4167, porcentaje: 20, precio: 5000, categoria: "Gaseosas Economicas / Aguas" },
    { id: 25, nombre: "Agua Palau 500cc x 12 Pack", precioCosto: 4167, porcentaje: 20, precio: 5000, categoria: "Gaseosas Economicas / Aguas" },
    { id: 26, nombre: "Bidon agua Villa del Sur", precioCosto: 1667, porcentaje: 20, precio: 2000, categoria: "Gaseosas Economicas / Aguas" },
    { id: 27, nombre: "Bidon agua Palau", precioCosto: 1333, porcentaje: 20, precio: 1600, categoria: "Gaseosas Economicas / Aguas" },
    
    // Cervezas
    { id: 28, nombre: "Heineken lata Pack 24", precioCosto: 45833, porcentaje: 20, precio: 55000, categoria: "Cervezas" },
    { id: 29, nombre: "Heineken cajon 12", precioCosto: 38333, porcentaje: 20, precio: 46000, categoria: "Cervezas" },
    { id: 30, nombre: "Laton Budweiser Pack", precioCosto: 32500, porcentaje: 20, precio: 39000, categoria: "Cervezas" },
    { id: 31, nombre: "Salta negra cajon 12", precioCosto: 28750, porcentaje: 20, precio: 34500, categoria: "Cervezas" },
    { id: 32, nombre: "Salta negra lata Pack", precioCosto: 28750, porcentaje: 20, precio: 34500, categoria: "Cervezas" },
    { id: 33, nombre: "Quilmes lata Pack", precioCosto: 26250, porcentaje: 20, precio: 31500, categoria: "Cervezas" },
    { id: 34, nombre: "Schneider lata Pack", precioCosto: 25000, porcentaje: 20, precio: 30000, categoria: "Cervezas" },
    { id: 35, nombre: "Quilmes cajon", precioCosto: 26667, porcentaje: 20, precio: 32000, categoria: "Cervezas" },
    { id: 36, nombre: "Norte lata Pack", precioCosto: 24167, porcentaje: 20, precio: 29000, categoria: "Cervezas" },
    { id: 37, nombre: "Norte cajon", precioCosto: 22917, porcentaje: 20, precio: 27500, categoria: "Cervezas" },
    
    // Vinos y Sidras
    { id: 38, nombre: "Dilema blanco", precioCosto: 14583, porcentaje: 20, precio: 17500, categoria: "Vinos y Sidras" },
    { id: 39, nombre: "Animana x 12 Pack", precioCosto: 14167, porcentaje: 20, precio: 17000, categoria: "Vinos y Sidras" },
    { id: 40, nombre: "Nativo blanco", precioCosto: 12083, porcentaje: 20, precio: 14500, categoria: "Vinos y Sidras" },
    { id: 41, nombre: "Sidra del Valle", precioCosto: 11250, porcentaje: 20, precio: 13500, categoria: "Vinos y Sidras" },
    { id: 42, nombre: "Canciller botellon bco tto", precioCosto: 11250, porcentaje: 20, precio: 13500, categoria: "Vinos y Sidras" },
    { id: 43, nombre: "Vieja Mendoza", precioCosto: 10417, porcentaje: 20, precio: 12500, categoria: "Vinos y Sidras" },
    
    // Jugos y Energizantes
    { id: 44, nombre: "Ades 1 lt", precioCosto: 10833, porcentaje: 20, precio: 13000, categoria: "Jugos y Energizantes" },
    { id: 45, nombre: "Cepita del valle x 4 Pack", precioCosto: 9750, porcentaje: 20, precio: 11700, categoria: "Jugos y Energizantes" },
    { id: 46, nombre: "Fresh 1.5 lt", precioCosto: 7167, porcentaje: 20, precio: 8600, categoria: "Jugos y Energizantes" },
    { id: 47, nombre: "Rock stars 500cc", precioCosto: 6250, porcentaje: 20, precio: 7500, categoria: "Jugos y Energizantes" },
    { id: 48, nombre: "Bebida Sporting 500cc x 6 Pack", precioCosto: 5000, porcentaje: 20, precio: 6000, categoria: "Jugos y Energizantes" },
    
    // Aperitivos y Espumantes
    { id: 49, nombre: "Champagne", precioCosto: 3333, porcentaje: 20, precio: 4000, categoria: "Aperitivos y Espumantes" },
    { id: 50, nombre: "Carpano", precioCosto: 3333, porcentaje: 20, precio: 4000, categoria: "Aperitivos y Espumantes" },
    
    // Varios
    { id: 51, nombre: "Craft Coral", precioCosto: 25000, porcentaje: 20, precio: 30000, categoria: "Varios" },
    { id: 52, nombre: "Marlboro craft", precioCosto: 23750, porcentaje: 20, precio: 28500, categoria: "Varios" },
];

const categorias = [
    "Gaseosas - Linea Coca-Cola",
    "Gaseosas - Linea Pepsi",
    "Gaseosas Economicas / Aguas",
    "Cervezas",
    "Vinos y Sidras",
    "Jugos y Energizantes",
    "Aperitivos y Espumantes",
    "Varios"
];

// ==================== ESTADO DE LA APP ====================
let estado = {
    config: {...CONFIG_DEFAULT},
    usuarioActual: null,
    esComputadora: false,
    pantalla: 'inicio',
    productos: [],
    clientes: [],
    pedidos: [],
    vendedores: [],
    pedidoActual: {
        cliente: null,
        items: [],
        nota: ''
    },
    filtros: {
        busqueda: '',
        categoria: 'todas'
    }
};

// ==================== DETECCION DE DISPOSITIVO ====================
function detectarDispositivo() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    
    // Detectar si es dispositivo movil por user agent
    const esMovilUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    
    // Detectar si es pantalla tactil
    const esTactil = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    // Detectar por tamaño de pantalla (menos de 1024px de ancho O menos de 768px de alto)
    const esPantallaChica = (ancho < 1024) || (alto < 768);
    
    // Es COMPUTADORA solo si: pantalla grande Y no es movil por UA Y no es principalmente tactil
    // Es CELULAR si: cualquiera de las condiciones de movil se cumple
    estado.esComputadora = !esMovilUA && !esPantallaChica && !esTactil;
    
    // Debug - mostrar en consola que dispositivo detecto
    console.log('Deteccion de dispositivo:', {
        ancho: ancho,
        alto: alto,
        esMovilUA: esMovilUA,
        esTactil: esTactil,
        esPantallaChica: esPantallaChica,
        resultado: estado.esComputadora ? 'COMPUTADORA' : 'CELULAR'
    });
    
    return estado.esComputadora;
}

// ==================== FUNCIONES DE ROL ====================
function esSuperusuario() {
    return estado.esComputadora || (estado.usuarioActual && estado.usuarioActual.rol === 'super');
}

function esVendedor() {
    return !estado.esComputadora && estado.usuarioActual && estado.usuarioActual.rol === 'vendedor';
}

function puedeEditarPrecios() {
    return esSuperusuario();
}

// ==================== GENERADOR DE CODIGOS ====================
function generarCodigoUsuario(numeroVendedor) {
    const pedidosDelVendedor = estado.pedidos.filter(p => 
        p.vendedor && p.vendedor.numeroVendedor === numeroVendedor
    ).length;
    const numeroPedido = String(pedidosDelVendedor + 1).padStart(4, '0');
    return `U${numeroVendedor}${numeroPedido}`;
}

function obtenerNumeroVendedor(telefono) {
    const vendedor = estado.vendedores.find(v => v.telefono === telefono);
    if (vendedor) return vendedor.numeroVendedor;
    return estado.vendedores.length + 1;
}

// ==================== FUNCIONES AUXILIARES ====================
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-AR', { 
        style: 'currency', 
        currency: 'ARS', 
        maximumFractionDigits: 0 
    }).format(precio);
}

function calcularPrecioFinal(costo, porcentaje) {
    return Math.round(costo * (1 + porcentaje / 100));
}

function obtenerFecha() {
    return new Date().toLocaleDateString('es-AR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function obtenerFechaCorta() {
    return new Date().toLocaleDateString('es-AR', { 
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function calcularTotal() {
    return estado.pedidoActual.items.reduce((total, item) => {
        return total + (item.precio * item.cantidad);
    }, 0);
}

// ==================== ALMACENAMIENTO ====================
function guardarDatos() {
    try {
        localStorage.setItem('app_config', JSON.stringify(estado.config));
        localStorage.setItem('app_productos', JSON.stringify(estado.productos));
        localStorage.setItem('app_clientes', JSON.stringify(estado.clientes));
        localStorage.setItem('app_pedidos', JSON.stringify(estado.pedidos));
        localStorage.setItem('app_vendedores', JSON.stringify(estado.vendedores));
    } catch(e) {
        console.error('Error guardando datos:', e);
    }
}

function cargarDatos() {
    try {
        const config = localStorage.getItem('app_config');
        const productos = localStorage.getItem('app_productos');
        const clientes = localStorage.getItem('app_clientes');
        const pedidos = localStorage.getItem('app_pedidos');
        const vendedores = localStorage.getItem('app_vendedores');
        
        estado.config = config ? JSON.parse(config) : {...CONFIG_DEFAULT};
        estado.productos = productos ? JSON.parse(productos) : [...productosIniciales];
        estado.clientes = clientes ? JSON.parse(clientes) : [];
        estado.pedidos = pedidos ? JSON.parse(pedidos) : [];
        estado.vendedores = vendedores ? JSON.parse(vendedores) : [];
    } catch(e) {
        console.error('Error cargando datos:', e);
        estado.config = {...CONFIG_DEFAULT};
        estado.productos = [...productosIniciales];
        estado.clientes = [];
        estado.pedidos = [];
        estado.vendedores = [];
    }
}

function guardarSesion() {
    if (estado.usuarioActual) {
        localStorage.setItem('app_sesion', JSON.stringify(estado.usuarioActual));
    }
}

function cargarSesion() {
    try {
        const sesion = localStorage.getItem('app_sesion');
        if (sesion) {
            estado.usuarioActual = JSON.parse(sesion);
            return true;
        }
    } catch(e) {
        console.error('Error cargando sesion:', e);
    }
    return false;
}

function cerrarSesion() {
    estado.usuarioActual = null;
    localStorage.removeItem('app_sesion');
    location.reload();
}

// ==================== CONFIGURACION INICIAL ====================
function mostrarConfiguracionInicial() {
    const login = document.getElementById('pantallaLogin');
    if (!login) return;
    
    login.innerHTML = `
        <div class="login-contenedor">
            <div style="font-size: 4rem; margin-bottom: 20px;">⚙️</div>
            <h1 class="login-titulo">Configuracion Inicial</h1>
            <p class="login-subtitulo">Configura tu sistema de pedidos</p>
            
            <div class="login-form">
                <div class="form-group" style="text-align: left;">
                    <label class="login-label">Nombre de tu empresa *</label>
                    <input type="text" id="configNombre" class="input-login" 
                           placeholder="Ej: Distribuidora Lopez" style="text-align: left; font-size: 1.2rem;">
                </div>
                
                <div class="form-group" style="text-align: left;">
                    <label class="login-label">WhatsApp del dueno (superusuario) *</label>
                    <input type="tel" id="configTelefono" class="input-login" 
                           placeholder="Ej: 3815551234" style="text-align: left; font-size: 1.2rem;">
                    <p class="login-ayuda" style="text-align: left;">Sin guiones ni espacios</p>
                </div>
                
                <div class="form-group" style="text-align: left;">
                    <label class="login-label">PIN de seguridad (4 digitos) *</label>
                    <input type="password" id="configPin" class="input-login" 
                           placeholder="Ej: 1234" maxlength="4" style="text-align: center; font-size: 1.5rem; letter-spacing: 10px;">
                </div>
                
                <button class="btn-login" onclick="guardarConfiguracion()">
                    💾 GUARDAR Y COMENZAR
                </button>
            </div>
            
            <p class="login-version">Sistema de Pedidos v${CONFIG_DEFAULT.version}</p>
        </div>
    `;
}

function guardarConfiguracion() {
    const nombre = document.getElementById('configNombre')?.value?.trim() || '';
    const telefono = (document.getElementById('configTelefono')?.value || '').replace(/\D/g, '');
    const pin = document.getElementById('configPin')?.value || '';
    
    if (!nombre) {
        alert('Por favor ingresa el nombre de tu empresa');
        return;
    }
    if (telefono.length < 8) {
        alert('Por favor ingresa un numero de WhatsApp valido');
        return;
    }
    if (pin.length !== 4) {
        alert('El PIN debe tener 4 digitos');
        return;
    }
    
    estado.config = {
        nombreEmpresa: nombre,
        telefonoSuperusuario: telefono,
        pinSuperusuario: pin,
        logoURL: 'img/logo.png',
        configurado: true,
        version: CONFIG_DEFAULT.version
    };
    
    guardarDatos();
    location.reload();
}

// ==================== LOGIN ====================
function mostrarLogin() {
    const login = document.getElementById('pantallaLogin');
    if (!login) return;
    
    const logo = estado.config.logoURL || 'img/logo.png';
    const nombre = estado.config.nombreEmpresa || 'Sistema de Pedidos';
    
    login.innerHTML = `
        <div class="login-contenedor">
            <img class="logo-grande" src="${logo}" alt="Logo" onerror="this.style.display='none'">
            <h1 class="login-titulo">${nombre}</h1>
            <p class="login-subtitulo">Sistema de Pedidos</p>
            
            <div class="login-form">
                <label class="login-label">Ingresa tu numero de celular</label>
                <input type="tel" id="inputTelefono" class="input-login" 
                       placeholder="Ej: 3815551234" maxlength="15">
                <p class="login-ayuda">Sin guiones ni espacios</p>
                <button class="btn-login" onclick="iniciarSesion()">
                    🚀 INGRESAR
                </button>
            </div>
            
            <p class="login-version">Version ${estado.config.version || '2.0'}</p>
        </div>
    `;
    
    setTimeout(() => {
        const input = document.getElementById('inputTelefono');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') iniciarSesion();
            });
        }
    }, 100);
}

function mostrarLoginPin(telefono) {
    const login = document.getElementById('pantallaLogin');
    if (!login) return;
    
    login.innerHTML = `
        <div class="login-contenedor">
            <div style="font-size: 4rem; margin-bottom: 20px;">🔐</div>
            <h1 class="login-titulo">Acceso Administrador</h1>
            <p class="login-subtitulo">Ingresa tu PIN de seguridad</p>
            
            <div class="login-form">
                <input type="password" id="inputPin" class="input-login" 
                       placeholder="● ● ● ●" maxlength="4" 
                       style="text-align: center; font-size: 2rem; letter-spacing: 15px;">
                
                <button class="btn-login" onclick="verificarPin('${telefono}')">
                    ✅ VERIFICAR
                </button>
                
                <button class="btn-login" style="background: #666; margin-top: 10px;" onclick="mostrarLogin()">
                    ← Volver
                </button>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        const input = document.getElementById('inputPin');
        if (input) {
            input.focus();
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') verificarPin(telefono);
            });
        }
    }, 100);
}

function iniciarSesion() {
    const input = document.getElementById('inputTelefono');
    const telefono = (input?.value || '').replace(/\D/g, '');
    
    if (telefono.length < 8) {
        alert('Por favor ingresa un numero de telefono valido');
        return;
    }
    
    if (telefono === estado.config.telefonoSuperusuario) {
        mostrarLoginPin(telefono);
        return;
    }
    
    let vendedor = estado.vendedores.find(v => v.telefono === telefono);
    
    if (!vendedor) {
        const numeroVendedor = estado.vendedores.length + 1;
        vendedor = {
            telefono: telefono,
            nombre: 'Vendedor ' + numeroVendedor,
            numeroVendedor: numeroVendedor,
            rol: 'vendedor',
            fechaRegistro: new Date().toISOString()
        };
        estado.vendedores.push(vendedor);
        guardarDatos();
    }
    
    estado.usuarioActual = vendedor;
    guardarSesion();
    iniciarApp();
}

function verificarPin(telefono) {
    const pinIngresado = document.getElementById('inputPin')?.value || '';
    
    if (pinIngresado === estado.config.pinSuperusuario) {
        estado.usuarioActual = {
            telefono: telefono,
            nombre: 'Administrador',
            rol: 'super',
            numeroVendedor: 0
        };
        guardarSesion();
        enviarNotificacionAcceso();
        iniciarApp();
    } else {
        alert('PIN incorrecto. Intenta de nuevo.');
        const input = document.getElementById('inputPin');
        if (input) {
            input.value = '';
            input.focus();
        }
    }
}

function enviarNotificacionAcceso() {
    const fecha = obtenerFechaCorta();
    const texto = encodeURIComponent(
        `🔐 *ALERTA DE SEGURIDAD*\n\n` +
        `Se inicio sesion como ADMINISTRADOR\n` +
        `📅 ${fecha}\n` +
        `📱 Desde: ${estado.usuarioActual.telefono}\n\n` +
        `_Si no fuiste tu, cambia el PIN inmediatamente._`
    );
    window.open(`https://wa.me/549${estado.config.telefonoSuperusuario}?text=${texto}`, '_blank');
}

// ==================== INICIAR APP ====================
function iniciarApp() {
    const login = document.getElementById('pantallaLogin');
    const app = document.getElementById('appPrincipal');
    
    if (login) login.style.display = 'none';
    if (app) {
        app.classList.remove('app-oculta');
        app.classList.add('app-visible');
    }
    
    actualizarHeader();
    
    const navAdmin = document.querySelector('.nav-admin');
    if (navAdmin) {
        if (esSuperusuario()) {
            navAdmin.classList.remove('oculto');
        } else {
            navAdmin.classList.add('oculto');
        }
    }
    
    configurarNavegacion();
    renderizar();
}

function actualizarHeader() {
    const nombreEmpresa = estado.config.nombreEmpresa || 'Sistema de Pedidos';
    const logoURL = estado.config.logoURL || 'img/logo.png';
    
    const h1 = document.querySelector('.header-info h1');
    if (h1) h1.textContent = nombreEmpresa;
    
    const logoImg = document.getElementById('logoImg');
    if (logoImg) logoImg.src = logoURL;
    
    if (estado.usuarioActual) {
        const nombreEl = document.getElementById('nombreUsuario');
        if (nombreEl) nombreEl.textContent = '👤 ' + estado.usuarioActual.nombre;
        
        const rolBadge = document.getElementById('rolUsuario');
        if (rolBadge) {
            if (esSuperusuario()) {
                rolBadge.textContent = '⭐ ADMIN';
                rolBadge.className = 'rol-badge super';
            } else {
                rolBadge.textContent = '🛒 Vendedor';
                rolBadge.className = 'rol-badge';
            }
        }
    }
}

// ==================== NAVEGACION ====================
function configurarNavegacion() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = function() {
            const pantalla = this.dataset.pantalla;
            if (pantalla) cambiarPantalla(pantalla);
        };
    });
    
    const btnCerrar = document.getElementById('btnCerrarSesion');
    if (btnCerrar) btnCerrar.onclick = cerrarSesion;
}

function cambiarPantalla(pantalla) {
    estado.pantalla = pantalla;
    estado.filtros.busqueda = '';
    estado.filtros.categoria = 'todas';
    renderizar();
    actualizarNav();
}

function actualizarNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('activo');
        if (btn.dataset.pantalla === estado.pantalla) {
            btn.classList.add('activo');
        }
    });
    
    const badge = document.getElementById('badgeCarrito');
    if (badge) {
        if (estado.pedidoActual.items.length > 0) {
            badge.textContent = estado.pedidoActual.items.length;
            badge.classList.remove('oculto');
        } else {
            badge.classList.add('oculto');
        }
    }
}

// ==================== RENDERIZADO PRINCIPAL ====================
function renderizar() {
    const contenedor = document.getElementById('pantallas');
    if (!contenedor) return;
    
    let html = '';
    
    switch(estado.pantalla) {
        case 'inicio':
            html = renderInicio();
            break;
        case 'nuevoPedido':
            html = renderNuevoPedido();
            break;
        case 'clientes':
            html = renderClientes();
            break;
        case 'productos':
            html = renderProductos();
            break;
        case 'historial':
            html = renderHistorial();
            break;
        case 'admin':
            html = renderAdmin();
            break;
        default:
            html = renderInicio();
    }
    
    contenedor.innerHTML = html;
    agregarEventos();
}

// ==================== PANTALLA INICIO ====================
function renderInicio() {
    const misPedidos = esSuperusuario() 
        ? estado.pedidos 
        : estado.pedidos.filter(p => p.vendedor?.telefono === estado.usuarioActual?.telefono);
    
    const hoy = new Date().toDateString();
    const pedidosHoy = misPedidos.filter(p => new Date(p.fecha).toDateString() === hoy);
    const totalHoy = pedidosHoy.reduce((sum, p) => sum + p.total, 0);
    
    return `
        <div class="tarjeta texto-centro">
            <h2>Bienvenido, ${estado.usuarioActual?.nombre || 'Usuario'}!</h2>
            <p style="color: #666; font-size: 1.1rem; margin-bottom: 20px;">
                ${esSuperusuario() ? '⭐ Acceso completo al sistema' : '🛒 Modo vendedor'}
            </p>
            
            <div class="grid-inicio">
                <button class="btn-inicio btn-primario" onclick="cambiarPantalla('nuevoPedido')">
                    <span class="icono">🛒</span>
                    Nuevo Pedido
                </button>
                <button class="btn-inicio btn-secundario" onclick="cambiarPantalla('clientes')">
                    <span class="icono">👥</span>
                    Clientes
                </button>
                <button class="btn-inicio btn-secundario" onclick="cambiarPantalla('productos')">
                    <span class="icono">📦</span>
                    Productos
                </button>
                <button class="btn-inicio btn-secundario" onclick="cambiarPantalla('historial')">
                    <span class="icono">📋</span>
                    Mis Pedidos
                </button>
            </div>
        </div>
        
        <div class="tarjeta">
            <h3>📊 Resumen del Dia</h3>
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-num">${pedidosHoy.length}</div>
                    <div class="stat-label">Pedidos Hoy</div>
                </div>
                <div class="stat-item">
                    <div class="stat-num" style="color: #2e7d32; font-size: 1.6rem;">${formatearPrecio(totalHoy)}</div>
                    <div class="stat-label">Ventas Hoy</div>
                </div>
                <div class="stat-item">
                    <div class="stat-num" style="color: #fb8c00;">${estado.clientes.length}</div>
                    <div class="stat-label">Clientes</div>
                </div>
            </div>
        </div>
    `;
}

// ==================== PANTALLA NUEVO PEDIDO ====================
function renderNuevoPedido() {
    let clienteHTML = '';
    if (estado.pedidoActual.cliente) {
        const c = estado.pedidoActual.cliente;
        clienteHTML = `
            <div class="cliente-seleccionado">
                <div>
                    <strong>🏪 ${c.nombreNegocio}</strong><br>
                    <span style="font-size: 0.95rem; color: #666;">📍 ${c.direccion}</span>
                </div>
                <button class="btn-quitar" onclick="quitarCliente()">❌</button>
            </div>
        `;
    } else {
        clienteHTML = `
            <button class="btn-full btn-azul mb-20" onclick="mostrarSeleccionCliente()">
                👤 Seleccionar Cliente
            </button>
        `;
    }
    
    let btnFlotante = '';
    if (estado.pedidoActual.items.length > 0) {
        btnFlotante = `
            <div class="btn-flotante">
                <button class="btn-full btn-verde" onclick="mostrarResumenPedido()">
                    ✅ Finalizar (${estado.pedidoActual.items.length}) - ${formatearPrecio(calcularTotal())}
                </button>
            </div>
        `;
    }
    
    return `
        <div class="tarjeta">
            <h2>🛒 Nuevo Pedido</h2>
            ${clienteHTML}
        </div>
        
        <input type="text" class="input-busqueda" placeholder="🔍 Buscar producto..." 
               id="inputBusqueda" value="${estado.filtros.busqueda}">
        
        <select class="select-categoria" id="selectCategoria">
            <option value="todas">📁 Todas las categorias</option>
            ${categorias.map(c => `<option value="${c}" ${estado.filtros.categoria === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
        
        <div class="tarjeta">
            <div id="listaProductosPedido">
                ${renderListaProductosPedido()}
            </div>
        </div>
        ${btnFlotante}
    `;
}

function renderListaProductosPedido() {
    let productosFiltrados = estado.productos.filter(p => {
        const coincideCategoria = estado.filtros.categoria === 'todas' || p.categoria === estado.filtros.categoria;
        const coincideBusqueda = p.nombre.toLowerCase().includes(estado.filtros.busqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });
    
    let html = '';
    if (estado.filtros.categoria === 'todas' && !estado.filtros.busqueda) {
        categorias.forEach(cat => {
            const prods = productosFiltrados.filter(p => p.categoria === cat);
            if (prods.length > 0) {
                html += `<div class="categoria-header">${cat}</div>`;
                prods.forEach(p => html += renderProductoParaPedido(p));
            }
        });
    } else {
        productosFiltrados.forEach(p => html += renderProductoParaPedido(p));
    }
    
    return html || '<div class="vacio"><p>No se encontraron productos</p></div>';
}

function renderProductoParaPedido(p) {
    const enPedido = estado.pedidoActual.items.find(i => i.id === p.id);
    const cantidad = enPedido ? enPedido.cantidad : 0;
    
    return `
        <div class="producto-item" style="${cantidad > 0 ? 'background-color: #e8f5e9;' : ''}">
            <div class="producto-info">
                <div class="producto-nombre">${p.nombre}</div>
                <div class="producto-precio-venta">${formatearPrecio(p.precio)}</div>
            </div>
            ${cantidad > 0 ? `
                <div class="cantidad-control">
                    <button class="btn-cantidad" onclick="modificarCantidadPedido(${p.id}, ${cantidad - 1})">−</button>
                    <span class="cantidad-numero">${cantidad}</span>
                    <button class="btn-cantidad" onclick="modificarCantidadPedido(${p.id}, ${cantidad + 1})">+</button>
                </div>
            ` : `
                <button class="btn-agregar" onclick="agregarAlPedido(${p.id})">+</button>
            `}
        </div>
    `;
}

// ==================== PANTALLA CLIENTES ====================
function renderClientes() {
    let clientesHTML = '';
    if (estado.clientes.length > 0) {
        clientesHTML = estado.clientes.map(c => `
            <div class="cliente-item" style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;" onclick="seleccionarClienteYPedido(${c.id})">
                    <div class="cliente-nombre">🏪 ${c.nombreNegocio}</div>
                    <div class="cliente-detalle">👤 ${c.nombreEncargado}</div>
                    <div class="cliente-detalle">📍 ${c.direccion}</div>
                    <div class="cliente-detalle">📱 ${c.telefono}</div>
                    ${c.codigoCliente ? `<div class="cliente-detalle" style="color: #1e88e5; font-weight: bold;">🏷️ ${c.codigoCliente}</div>` : ''}
                </div>
                <div class="acciones" style="flex-direction: column; gap: 8px;">
                    <button class="btn-editar" onclick="event.stopPropagation(); editarCliente(${c.id})">✏️</button>
                    <button class="btn-eliminar" onclick="event.stopPropagation(); eliminarCliente(${c.id})">🗑️</button>
                </div>
            </div>
        `).join('');
    } else {
        clientesHTML = `
            <div class="vacio">
                <div class="icono">👥</div>
                <p>No hay clientes registrados</p>
            </div>
        `;
    }
    
    return `
        <div class="tarjeta">
            <h2>👥 Mis Clientes</h2>
            <button class="btn-full btn-azul" onclick="mostrarFormCliente()">
                ➕ Agregar Nuevo Cliente
            </button>
        </div>
        <div class="tarjeta">
            ${clientesHTML}
        </div>
    `;
}

// ==================== PANTALLA PRODUCTOS ====================
function renderProductos() {
    return `
        <div class="tarjeta">
            <h2>📦 Productos</h2>
            ${puedeEditarPrecios() ? `
                <button class="btn-full btn-azul mb-20" onclick="mostrarFormProducto()">
                    ➕ Agregar Nuevo Producto
                </button>
            ` : `
                <div class="alerta alerta-info">
                    ℹ️ Solo el administrador puede modificar precios
                </div>
            `}
        </div>
        
        <input type="text" class="input-busqueda" placeholder="🔍 Buscar producto..." 
               id="inputBusquedaProductos" value="">
        
        <div class="tarjeta">
            <div id="listaProductosAdmin">
                ${renderListaProductosAdmin()}
            </div>
        </div>
    `;
}

function renderListaProductosAdmin() {
    let html = '';
    categorias.forEach(cat => {
        const prods = estado.productos.filter(p => p.categoria === cat);
        if (prods.length > 0) {
            html += `<div class="categoria-header">${cat}</div>`;
            prods.forEach(p => {
                html += `
                    <div class="producto-item">
                        <div class="producto-info">
                            <div class="producto-nombre">${p.nombre}</div>
                            ${puedeEditarPrecios() ? `
                                <div class="producto-precios">
                                    <span class="precio-costo">Costo: ${formatearPrecio(p.precioCosto)}</span>
                                    <span class="precio-ganancia">+${p.porcentaje}%</span>
                                </div>
                            ` : ''}
                            <div class="producto-precio-venta">Venta: ${formatearPrecio(p.precio)}</div>
                        </div>
                        ${puedeEditarPrecios() ? `
                            <div class="acciones">
                                <button class="btn-editar" onclick="editarProducto(${p.id})">✏️</button>
                                <button class="btn-eliminar" onclick="eliminarProducto(${p.id})">🗑️</button>
                            </div>
                        ` : ''}
                    </div>
                `;
            });
        }
    });
    return html;
}

// ==================== PANTALLA HISTORIAL ====================
function renderHistorial() {
    const misPedidos = esSuperusuario() 
        ? estado.pedidos 
        : estado.pedidos.filter(p => p.vendedor?.telefono === estado.usuarioActual?.telefono);
    
    let pedidosHTML = '';
    if (misPedidos.length > 0) {
        pedidosHTML = misPedidos.map(p => `
            <div class="tarjeta">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <span style="font-size: 1.15rem; font-weight: bold; color: #1e88e5;">
                        🏷️ ${p.codigo || 'Sin codigo'}
                    </span>
                    <span class="pedido-estado ${p.estado === 'pendiente' ? 'estado-pendiente' : 'estado-entregado'}">
                        ${p.estado === 'pendiente' ? '⏳ Pendiente' : '✅ Entregado'}
                    </span>
                </div>
                <div style="font-size: 0.95rem; color: #666; margin-bottom: 10px;">
                    📅 ${new Date(p.fecha).toLocaleDateString('es-AR')} ${new Date(p.fecha).toLocaleTimeString('es-AR', {hour: '2-digit', minute: '2-digit'})}
                </div>
                ${p.cliente ? `<div style="margin-bottom: 10px; font-size: 1.1rem;"><strong>🏪 ${p.cliente.nombreNegocio}</strong></div>` : ''}
                ${esSuperusuario() && p.vendedor ? `<div style="font-size: 0.95rem; color: #666; margin-bottom: 10px;">👤 Vendedor: ${p.vendedor.nombre}</div>` : ''}
                <div style="font-size: 1rem; color: #666; margin-bottom: 15px;">${p.items.length} productos</div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-size: 1.3rem; font-weight: bold; color: #1e3a5f;">${formatearPrecio(p.total)}</div>
                    <div class="acciones">
                        <button class="btn-editar" onclick="reenviarPedido(${p.id})">📤</button>
                        <button class="btn-editar" style="background-color: ${p.estado === 'pendiente' ? '#4caf50' : '#ff9800'}; color: white; border: none;"
                                onclick="cambiarEstadoPedido(${p.id})">
                            ${p.estado === 'pendiente' ? '✅' : '↩️'}
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    } else {
        pedidosHTML = `
            <div class="tarjeta">
                <div class="vacio">
                    <div class="icono">📋</div>
                    <p>No hay pedidos registrados</p>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="tarjeta">
            <h2>📋 ${esSuperusuario() ? 'Todos los Pedidos' : 'Mis Pedidos'}</h2>
        </div>
        ${pedidosHTML}
    `;
}

// ==================== PANTALLA ADMIN ====================
function renderAdmin() {
    if (!esSuperusuario()) {
        return '<div class="tarjeta"><p>Acceso no autorizado</p></div>';
    }
    
    const vendedoresHTML = estado.vendedores.length > 0 ? estado.vendedores.map(v => {
        const ventasVendedor = estado.pedidos.filter(p => p.vendedor?.telefono === v.telefono);
        const totalVentas = ventasVendedor.reduce((sum, p) => sum + p.total, 0);
        return `
            <div class="vendedor-item">
                <div class="vendedor-info">
                    <div class="vendedor-nombre">👤 ${v.nombre}</div>
                    <div class="vendedor-telefono">📱 ${v.telefono}</div>
                    <div class="vendedor-telefono">🏷️ Vendedor #${v.numeroVendedor}</div>
                    <div class="vendedor-ventas">💰 ${formatearPrecio(totalVentas)} (${ventasVendedor.length} pedidos)</div>
                </div>
                <div class="acciones" style="flex-direction: column; gap: 8px;">
                    <button class="btn-editar" onclick="editarVendedor('${v.telefono}')">✏️</button>
                    <button class="btn-eliminar" onclick="eliminarVendedor('${v.telefono}')">🗑️</button>
                </div>
            </div>
        `;
    }).join('') : '<p style="color: #666; text-align: center; padding: 20px;">No hay vendedores registrados</p>';
    
    return `
        <div class="tarjeta">
            <h2>⚙️ Panel de Administracion</h2>
        </div>
        
        <div class="admin-seccion">
            <h3>🏢 Configuracion de la Empresa</h3>
            <div style="background: white; padding: 15px; border-radius: 12px; margin-bottom: 15px;">
                <p><strong>Empresa:</strong> ${estado.config.nombreEmpresa}</p>
                <p><strong>WhatsApp:</strong> ${estado.config.telefonoSuperusuario}</p>
                <p><strong>PIN:</strong> ****</p>
            </div>
            <button class="btn-full btn-naranja" onclick="mostrarEditarConfig()">
                ✏️ Modificar Configuracion
            </button>
        </div>
        
        <div class="admin-seccion">
            <h3>👥 Vendedores (${estado.vendedores.length})</h3>
            ${vendedoresHTML}
        </div>
        
        <div class="tarjeta">
            <h3>📊 Estadisticas Generales</h3>
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-num">${estado.pedidos.length}</div>
                    <div class="stat-label">Total Pedidos</div>
                </div>
                <div class="stat-item">
                    <div class="stat-num" style="color: #2e7d32;">${estado.vendedores.length}</div>
                    <div class="stat-label">Vendedores</div>
                </div>
                <div class="stat-item">
                    <div class="stat-num" style="color: #1e88e5;">${estado.productos.length}</div>
                    <div class="stat-label">Productos</div>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <div class="stat-item" style="background: #e8f5e9; padding: 20px; border-radius: 12px;">
                    <div class="stat-num" style="color: #2e7d32; font-size: 1.8rem;">
                        ${formatearPrecio(estado.pedidos.reduce((sum, p) => sum + p.total, 0))}
                    </div>
                    <div class="stat-label">Total Vendido (Historico)</div>
                </div>
            </div>
        </div>
        
        <div class="tarjeta">
            <h3>🗑️ Zona de Peligro</h3>
            <button class="btn-full btn-rojo" onclick="confirmarResetearDatos()">
                ⚠️ Resetear Todos los Datos
            </button>
        </div>
    `;
}

// ==================== MODALES ====================
function mostrarResumenPedido() {
    if (estado.pedidoActual.items.length === 0) {
        alert('Agrega productos al pedido primero');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalResumen';
    
    const itemsHTML = estado.pedidoActual.items.map(item => `
        <div style="padding: 15px 0; border-bottom: 1px solid #eee;">
            <div style="font-weight: bold; font-size: 1.05rem;">${item.nombre}</div>
            <div style="display: flex; justify-content: space-between; margin-top: 8px;">
                <span>${item.cantidad} x ${formatearPrecio(item.precio)}</span>
                <strong style="color: #2e7d32;">${formatearPrecio(item.cantidad * item.precio)}</strong>
            </div>
        </div>
    `).join('');
    
    const numeroVendedor = estado.usuarioActual?.numeroVendedor || 0;
    const codigoPedido = generarCodigoUsuario(numeroVendedor);
    
    modal.innerHTML = `
        <div class="modal-contenido">
            <h2>📋 Resumen del Pedido</h2>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
                <div style="font-size: 0.9rem; color: #666;">Codigo de Pedido</div>
                <div style="font-size: 1.6rem; font-weight: bold; color: #1e3a5f;">${codigoPedido}</div>
            </div>
            
            ${estado.pedidoActual.cliente ? `
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 12px; margin-bottom: 20px;">
                    <strong>🏪 ${estado.pedidoActual.cliente.nombreNegocio}</strong><br>
                    <span style="color: #666;">📍 ${estado.pedidoActual.cliente.direccion}</span><br>
                    <span style="color: #666;">📱 ${estado.pedidoActual.cliente.telefono}</span>
                </div>
            ` : `
                <div class="alerta alerta-info" style="margin-bottom: 20px;">
                    ⚠️ No seleccionaste un cliente
                </div>
            `}
            
            ${itemsHTML}
            
            <div class="total-grande">
                💰 TOTAL: ${formatearPrecio(calcularTotal())}
            </div>
            
            <div class="form-group">
                <label>📝 Notas (opcional)</label>
                <textarea class="input-texto" id="notaPedido" placeholder="Ej: Entregar por la tarde...">${estado.pedidoActual.nota || ''}</textarea>
            </div>
            
            <button class="btn-full btn-verde" onclick="confirmarPedido('${codigoPedido}')">
                ✅ Confirmar y Enviar por WhatsApp
            </button>
            <button class="btn-full btn-blanco" onclick="cerrarModal('modalResumen')">
                ← Volver a editar
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function mostrarFormCliente(clienteId) {
    const cliente = clienteId ? estado.clientes.find(c => c.id === clienteId) : null;
    const nuevoCodigoCliente = cliente?.codigoCliente || `C${String(estado.clientes.length + 1).padStart(4, '0')}`;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalCliente';
    modal.innerHTML = `
        <div class="modal-contenido">
            <h2>${cliente ? '✏️ Editar Cliente' : '➕ Nuevo Cliente'}</h2>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
                <div style="font-size: 0.9rem; color: #666;">Codigo de Cliente</div>
                <div style="font-size: 1.4rem; font-weight: bold; color: #1e3a5f;">${nuevoCodigoCliente}</div>
            </div>
            
            <div class="form-group">
                <label>Nombre del Negocio *</label>
                <input type="text" class="input-texto" id="nombreNegocio" value="${cliente?.nombreNegocio || ''}" placeholder="Ej: Kiosco Don Jose">
            </div>
            <div class="form-group">
                <label>Nombre del Encargado *</label>
                <input type="text" class="input-texto" id="nombreEncargado" value="${cliente?.nombreEncargado || ''}" placeholder="Ej: Jose Perez">
            </div>
            <div class="form-group">
                <label>Direccion *</label>
                <input type="text" class="input-texto" id="direccion" value="${cliente?.direccion || ''}" placeholder="Ej: Av. Belgrano 1234">
            </div>
            <div class="form-group">
                <label>Telefono / WhatsApp *</label>
                <input type="tel" class="input-texto" id="telefono" value="${cliente?.telefono || ''}" placeholder="Ej: 3815551234">
            </div>
            
            <button class="btn-full btn-azul" onclick="guardarCliente(${cliente?.id || 'null'}, '${nuevoCodigoCliente}')">
                💾 Guardar Cliente
            </button>
            <button class="btn-full btn-blanco" onclick="cerrarModal('modalCliente')">
                ❌ Cancelar
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function mostrarFormProducto(productoId) {
    if (!puedeEditarPrecios()) {
        alert('Solo el administrador puede editar productos');
        return;
    }
    
    const producto = productoId ? estado.productos.find(p => p.id === productoId) : null;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalProducto';
    modal.innerHTML = `
        <div class="modal-contenido">
            <h2>${producto ? '✏️ Editar Producto' : '➕ Nuevo Producto'}</h2>
            
            <div class="form-group">
                <label>Nombre del Producto *</label>
                <input type="text" class="input-texto" id="nombreProducto" value="${producto?.nombre || ''}" placeholder="Ej: Coca-Cola 2.5 lt">
            </div>
            
            <div class="form-group">
                <label>Categoria *</label>
                <select class="select-categoria" id="categoriaProducto">
                    ${categorias.map(c => `<option value="${c}" ${producto?.categoria === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
            </div>
            
            <div class="precio-grupo">
                <h3>💰 Precios</h3>
                <div class="form-group">
                    <label>Precio de Costo *</label>
                    <input type="number" class="input-texto" id="precioCosto" value="${producto?.precioCosto || ''}" placeholder="10000" oninput="calcularPrecioEnModal()">
                </div>
                <div class="form-group">
                    <label>Porcentaje de Ganancia % *</label>
                    <input type="number" class="input-texto" id="porcentajeGanancia" value="${producto?.porcentaje || 20}" placeholder="20" oninput="calcularPrecioEnModal()">
                </div>
                <div class="precio-resultado" id="precioFinalResultado">
                    Precio de Venta: ${producto ? formatearPrecio(producto.precio) : '$0'}
                </div>
            </div>
            
            <button class="btn-full btn-azul" onclick="guardarProducto(${producto?.id || 'null'})">
                💾 Guardar Producto
            </button>
            <button class="btn-full btn-blanco" onclick="cerrarModal('modalProducto')">
                ❌ Cancelar
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function mostrarSeleccionCliente() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalSeleccionCliente';
    
    const clientesHTML = estado.clientes.length > 0 ? estado.clientes.map(c => `
        <div class="cliente-item" onclick="seleccionarClienteModal(${c.id})">
            <div class="cliente-nombre">🏪 ${c.nombreNegocio}</div>
            <div class="cliente-detalle">👤 ${c.nombreEncargado}</div>
            <div class="cliente-detalle">📍 ${c.direccion}</div>
            ${c.codigoCliente ? `<div class="cliente-detalle" style="color: #1e88e5;">🏷️ ${c.codigoCliente}</div>` : ''}
        </div>
    `).join('') : `
        <div class="vacio">
            <p>No hay clientes</p>
        </div>
    `;
    
    modal.innerHTML = `
        <div class="modal-contenido">
            <h2>👤 Seleccionar Cliente</h2>
            <button class="btn-full btn-azul mb-20" onclick="cerrarModal('modalSeleccionCliente'); mostrarFormCliente();">
                ➕ Nuevo Cliente
            </button>
            ${clientesHTML}
            <button class="btn-full btn-blanco" onclick="cerrarModal('modalSeleccionCliente')">
                ❌ Cancelar
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function mostrarEditarConfig() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalConfig';
    modal.innerHTML = `
        <div class="modal-contenido">
            <h2>⚙️ Configuracion</h2>
            
            <div class="form-group">
                <label>Nombre de la Empresa *</label>
                <input type="text" class="input-texto" id="editNombre" value="${estado.config.nombreEmpresa}">
            </div>
            <div class="form-group">
                <label>WhatsApp Superusuario *</label>
                <input type="tel" class="input-texto" id="editTelefono" value="${estado.config.telefonoSuperusuario}">
            </div>
            <div class="form-group">
                <label>Nuevo PIN (dejar vacio para no cambiar)</label>
                <input type="password" class="input-texto" id="editPin" placeholder="****" maxlength="4">
            </div>
            
            <button class="btn-full btn-azul" onclick="guardarConfigEdicion()">
                💾 Guardar Cambios
            </button>
            <button class="btn-full btn-blanco" onclick="cerrarModal('modalConfig')">
                ❌ Cancelar
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function calcularPrecioEnModal() {
    const costo = Number(document.getElementById('precioCosto')?.value) || 0;
    const porcentaje = Number(document.getElementById('porcentajeGanancia')?.value) || 0;
    const precioFinal = calcularPrecioFinal(costo, porcentaje);
    const resultado = document.getElementById('precioFinalResultado');
    if (resultado) resultado.textContent = `Precio de Venta: ${formatearPrecio(precioFinal)}`;
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.remove();
}

// ==================== ACCIONES DE PEDIDO ====================
function agregarAlPedido(id) {
    const producto = estado.productos.find(p => p.id === id);
    if (!producto) return;
    
    const existente = estado.pedidoActual.items.find(i => i.id === id);
    
    if (existente) {
        existente.cantidad++;
    } else {
        estado.pedidoActual.items.push({...producto, cantidad: 1});
    }
    
    actualizarNav();
    actualizarListaProductos();
}

function modificarCantidadPedido(id, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
        estado.pedidoActual.items = estado.pedidoActual.items.filter(i => i.id !== id);
    } else {
        const item = estado.pedidoActual.items.find(i => i.id === id);
        if (item) item.cantidad = nuevaCantidad;
    }
    actualizarNav();
    actualizarListaProductos();
}

function actualizarListaProductos() {
    const lista = document.getElementById('listaProductosPedido');
    if (lista) {
        lista.innerHTML = renderListaProductosPedido();
    }
    
    // Actualizar boton flotante
    const contenedor = document.getElementById('pantallas');
    if (contenedor && estado.pantalla === 'nuevoPedido') {
        let btnFlotante = contenedor.querySelector('.btn-flotante');
        if (estado.pedidoActual.items.length > 0) {
            if (!btnFlotante) {
                btnFlotante = document.createElement('div');
                btnFlotante.className = 'btn-flotante';
                contenedor.appendChild(btnFlotante);
            }
            btnFlotante.innerHTML = `
                <button class="btn-full btn-verde" onclick="mostrarResumenPedido()">
                    ✅ Finalizar (${estado.pedidoActual.items.length}) - ${formatearPrecio(calcularTotal())}
                </button>
            `;
        } else if (btnFlotante) {
            btnFlotante.remove();
        }
    }
}

function seleccionarClienteModal(id) {
    estado.pedidoActual.cliente = estado.clientes.find(c => c.id === id);
    cerrarModal('modalSeleccionCliente');
    renderizar();
}

function seleccionarClienteYPedido(id) {
    estado.pedidoActual.cliente = estado.clientes.find(c => c.id === id);
    cambiarPantalla('nuevoPedido');
}

function quitarCliente() {
    estado.pedidoActual.cliente = null;
    renderizar();
}

function generarTextoPedido(codigoPedido) {
    const nombreEmpresa = estado.config.nombreEmpresa || 'Sistema de Pedidos';
    
    let texto = `🛒 *PEDIDO #${codigoPedido}*\n`;
    texto += `🏢 ${nombreEmpresa}\n`;
    texto += `📅 ${obtenerFecha()}\n`;
    texto += `👤 Vendedor: ${estado.usuarioActual?.nombre || 'Desconocido'} (${estado.usuarioActual?.telefono || ''})\n\n`;
    
    if (estado.pedidoActual.cliente) {
        const c = estado.pedidoActual.cliente;
        texto += `🏪 *CLIENTE:*\n`;
        texto += `• ${c.nombreNegocio}${c.codigoCliente ? ' (' + c.codigoCliente + ')' : ''}\n`;
        texto += `• ${c.nombreEncargado}\n`;
        texto += `• 📍 ${c.direccion}\n`;
        texto += `• 📱 ${c.telefono}\n\n`;
    }
    
    texto += `📦 *PRODUCTOS:*\n`;
    estado.pedidoActual.items.forEach((item, i) => {
        texto += `${i+1}. ${item.nombre}\n`;
        texto += `   ${item.cantidad} x ${formatearPrecio(item.precio)} = ${formatearPrecio(item.cantidad * item.precio)}\n`;
    });
    
    texto += `\n💰 *TOTAL: ${formatearPrecio(calcularTotal())}*\n`;
    
    const nota = document.getElementById('notaPedido')?.value || estado.pedidoActual.nota;
    if (nota) {
        texto += `\n📝 *NOTAS:* ${nota}\n`;
    }
    
    return texto;
}

function confirmarPedido(codigoPedido) {
    const nota = document.getElementById('notaPedido')?.value || '';
    
    const nuevoPedido = {
        id: Date.now(),
        codigo: codigoPedido,
        fecha: new Date().toISOString(),
        cliente: estado.pedidoActual.cliente,
        vendedor: estado.usuarioActual,
        items: [...estado.pedidoActual.items],
        total: calcularTotal(),
        nota: nota,
        estado: 'pendiente'
    };
    
    estado.pedidos.unshift(nuevoPedido);
    guardarDatos();
    
    const texto = encodeURIComponent(generarTextoPedido(codigoPedido));
    
    cerrarModal('modalResumen');
    mostrarOpcionesEnvio(texto, codigoPedido);
}

function mostrarOpcionesEnvio(texto, codigoPedido) {
    const telefonoCliente = (estado.pedidoActual.cliente?.telefono || '').replace(/\D/g, '');
    const telefonoVendedor = estado.usuarioActual?.telefono || '';
    const telefonoEmpresa = estado.config.telefonoSuperusuario;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalEnvio';
    modal.innerHTML = `
        <div class="modal-contenido">
            <h2>✅ Pedido #${codigoPedido} Guardado!</h2>
            
            <div class="alerta alerta-exito">
                El pedido fue guardado correctamente
            </div>
            
            <p style="margin-bottom: 20px; font-size: 1.05rem; text-align: center;">Enviar por WhatsApp a:</p>
            
            ${telefonoCliente ? `
                <button class="btn-full btn-verde" onclick="window.open('https://wa.me/549${telefonoCliente}?text=${texto}', '_blank')">
                    🏪 Cliente (${telefonoCliente})
                </button>
            ` : ''}
            
            ${telefonoVendedor && !esSuperusuario() ? `
                <button class="btn-full btn-azul" onclick="window.open('https://wa.me/549${telefonoVendedor}?text=${texto}', '_blank')">
                    📱 Mi Copia (${telefonoVendedor})
                </button>
            ` : ''}
            
            <button class="btn-full btn-naranja" onclick="window.open('https://wa.me/549${telefonoEmpresa}?text=${texto}', '_blank')">
                🏢 Empresa (${telefonoEmpresa})
            </button>
            
            <button class="btn-full btn-blanco" onclick="finalizarPedido()" style="margin-top: 20px;">
                ✅ Listo - Nuevo Pedido
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function finalizarPedido() {
    estado.pedidoActual = { cliente: null, items: [], nota: '' };
    cerrarModal('modalEnvio');
    actualizarNav();
    cambiarPantalla('inicio');
}

function reenviarPedido(id) {
    const pedido = estado.pedidos.find(p => p.id === id);
    if (!pedido) return;
    
    const nombreEmpresa = estado.config.nombreEmpresa || 'Sistema de Pedidos';
    
    let texto = `🛒 *PEDIDO #${pedido.codigo}* (Reenvio)\n`;
    texto += `🏢 ${nombreEmpresa}\n`;
    texto += `📅 ${new Date(pedido.fecha).toLocaleDateString('es-AR')}\n\n`;
    
    if (pedido.cliente) {
        texto += `🏪 *CLIENTE:* ${pedido.cliente.nombreNegocio}\n`;
        texto += `📍 ${pedido.cliente.direccion}\n\n`;
    }
    
    texto += `📦 *PRODUCTOS:*\n`;
    pedido.items.forEach((item, i) => {
        texto += `${i+1}. ${item.nombre} x${item.cantidad} = ${formatearPrecio(item.cantidad * item.precio)}\n`;
    });
    
    texto += `\n💰 *TOTAL: ${formatearPrecio(pedido.total)}*`;
    
    window.open(`https://wa.me/549${estado.config.telefonoSuperusuario}?text=${encodeURIComponent(texto)}`, '_blank');
}

// ==================== ACCIONES CRUD ====================
function guardarCliente(id, codigoCliente) {
    const datos = {
        id: id || Date.now(),
        codigoCliente: codigoCliente,
        nombreNegocio: (document.getElementById('nombreNegocio')?.value || '').trim(),
        nombreEncargado: (document.getElementById('nombreEncargado')?.value || '').trim(),
        direccion: (document.getElementById('direccion')?.value || '').trim(),
        telefono: (document.getElementById('telefono')?.value || '').replace(/\D/g, '')
    };
    
    if (!datos.nombreNegocio || !datos.nombreEncargado || !datos.direccion || !datos.telefono) {
        alert('Por favor complete todos los campos obligatorios');
        return;
    }
    
    if (id) {
        const index = estado.clientes.findIndex(c => c.id === id);
        if (index >= 0) estado.clientes[index] = {...estado.clientes[index], ...datos};
    } else {
        estado.clientes.push(datos);
    }
    
    guardarDatos();
    cerrarModal('modalCliente');
    renderizar();
}

function editarCliente(id) {
    mostrarFormCliente(id);
}

function eliminarCliente(id) {
    if (confirm('¿Eliminar este cliente?')) {
        estado.clientes = estado.clientes.filter(c => c.id !== id);
        guardarDatos();
        renderizar();
    }
}

function guardarProducto(id) {
    const precioCosto = Number(document.getElementById('precioCosto')?.value) || 0;
    const porcentaje = Number(document.getElementById('porcentajeGanancia')?.value) || 0;
    
    const datos = {
        id: id || Date.now(),
        nombre: (document.getElementById('nombreProducto')?.value || '').trim(),
        precioCosto: precioCosto,
        porcentaje: porcentaje,
        precio: calcularPrecioFinal(precioCosto, porcentaje),
        categoria: document.getElementById('categoriaProducto')?.value || categorias[0]
    };
    
    if (!datos.nombre || !datos.precioCosto) {
        alert('Complete todos los campos obligatorios');
        return;
    }
    
    if (id) {
        const index = estado.productos.findIndex(p => p.id === id);
        if (index >= 0) estado.productos[index] = datos;
    } else {
        estado.productos.push(datos);
    }
    
    guardarDatos();
    cerrarModal('modalProducto');
    renderizar();
}

function editarProducto(id) {
    mostrarFormProducto(id);
}

function eliminarProducto(id) {
    if (confirm('¿Eliminar este producto?')) {
        estado.productos = estado.productos.filter(p => p.id !== id);
        guardarDatos();
        renderizar();
    }
}

function cambiarEstadoPedido(id) {
    const pedido = estado.pedidos.find(p => p.id === id);
    if (pedido) {
        pedido.estado = pedido.estado === 'pendiente' ? 'entregado' : 'pendiente';
        guardarDatos();
        renderizar();
    }
}

function editarVendedor(telefono) {
    const vendedor = estado.vendedores.find(v => v.telefono === telefono);
    if (!vendedor) return;
    
    const nuevoNombre = prompt('Nuevo nombre para el vendedor:', vendedor.nombre);
    if (nuevoNombre && nuevoNombre.trim()) {
        vendedor.nombre = nuevoNombre.trim();
        guardarDatos();
        renderizar();
    }
}

function eliminarVendedor(telefono) {
    if (confirm('¿Eliminar este vendedor? Sus pedidos se mantendran.')) {
        estado.vendedores = estado.vendedores.filter(v => v.telefono !== telefono);
        guardarDatos();
        renderizar();
    }
}

function guardarConfigEdicion() {
    const nombre = (document.getElementById('editNombre')?.value || '').trim();
    const telefono = (document.getElementById('editTelefono')?.value || '').replace(/\D/g, '');
    const pin = document.getElementById('editPin')?.value || '';
    
    if (!nombre || telefono.length < 8) {
        alert('Complete los campos correctamente');
        return;
    }
    
    estado.config.nombreEmpresa = nombre;
    estado.config.telefonoSuperusuario = telefono;
    if (pin && pin.length === 4) {
        estado.config.pinSuperusuario = pin;
    }
    
    guardarDatos();
    cerrarModal('modalConfig');
    actualizarHeader();
    renderizar();
    alert('Configuracion guardada!');
}

function confirmarResetearDatos() {
    if (confirm('⚠️ ATENCION: Esto eliminara TODOS los datos. ¿Estas seguro?')) {
        if (confirm('Esta accion NO se puede deshacer. ¿Confirmar?')) {
            localStorage.clear();
            location.reload();
        }
    }
}

// ==================== EVENTOS ====================
function agregarEventos() {
    const inputBusqueda = document.getElementById('inputBusqueda');
    if (inputBusqueda) {
        inputBusqueda.oninput = function() {
            estado.filtros.busqueda = this.value;
            const lista = document.getElementById('listaProductosPedido');
            if (lista) lista.innerHTML = renderListaProductosPedido();
        };
    }
    
    const selectCategoria = document.getElementById('selectCategoria');
    if (selectCategoria) {
        selectCategoria.onchange = function() {
            estado.filtros.categoria = this.value;
            const lista = document.getElementById('listaProductosPedido');
            if (lista) lista.innerHTML = renderListaProductosPedido();
        };
    }
    
    const inputBusquedaProductos = document.getElementById('inputBusquedaProductos');
    if (inputBusquedaProductos) {
        inputBusquedaProductos.oninput = function() {
            const busqueda = this.value.toLowerCase();
            const items = document.querySelectorAll('#listaProductosAdmin .producto-item');
            items.forEach(item => {
                const nombre = item.querySelector('.producto-nombre');
                if (nombre) {
                    const coincide = nombre.textContent.toLowerCase().includes(busqueda);
                    item.style.display = coincide ? 'flex' : 'none';
                }
            });
        };
    }
}

// ==================== INICIALIZACION ====================
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Detectar dispositivo
        detectarDispositivo();
        
        // Cargar datos guardados
        cargarDatos();
        
        // Si no esta configurado, mostrar pantalla de configuracion
        if (!estado.config.configurado) {
            mostrarConfiguracionInicial();
            return;
        }
        
        // COMPUTADORA: Entrar directo como admin
        if (estado.esComputadora) {
            console.log('Modo COMPUTADORA - Entrando como ADMIN');
            estado.usuarioActual = {
                telefono: estado.config.telefonoSuperusuario,
                nombre: 'Administrador',
                rol: 'super',
                numeroVendedor: 0
            };
            iniciarApp();
            return;
        }
        
        // CELULAR: Siempre pedir login (incluso si hay sesion guardada, verificar)
        console.log('Modo CELULAR - Mostrando login');
        
        // Limpiar sesion anterior para forzar login fresco en celular
        localStorage.removeItem('app_sesion');
        estado.usuarioActual = null;
        
        mostrarLogin();
        
    } catch(e) {
        console.error('Error iniciando app:', e);
        alert('Error iniciando la aplicacion. Intenta recargar la pagina.');
    }
});

// Detectar cambios de tamaño de pantalla (por si rotan el celular o cambian ventana)
window.addEventListener('resize', function() {
    const eraComputadora = estado.esComputadora;
    detectarDispositivo();
    
    // Si cambio de tipo de dispositivo, recargar
    if (eraComputadora !== estado.esComputadora) {
        console.log('Cambio de tipo de dispositivo detectado, recargando...');
        location.reload();
    }
});
