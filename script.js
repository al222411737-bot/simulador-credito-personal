document
    .getElementById('btn-calcular')
    .addEventListener('click', procesarSimulacion);

function procesarSimulacion() {

    const montoInput = parseFloat(
        document.getElementById('monto').value
    );

    const tasaAnualInput = parseFloat(
        document.getElementById('tasa').value
    ) / 100;

    const plazoMeses = parseInt(
        document.getElementById('plazo').value
    );

    const IVA_VALOR = 0.16;

    if (
        isNaN(montoInput) ||
        isNaN(tasaAnualInput) ||
        montoInput <= 0
    ) {

        alert(
            "Ingrese parámetros numéricos válidos e intente nuevamente."
        );

        return;
    }

    const amortizacionCapital =
        montoInput / plazoMeses;

    const tasaMensualEquivalente =
        tasaAnualInput / 12;

    let saldoInsoluto = montoInput;

    const tablaBody =
        document.querySelector(
            '#tabla-amortizacion tbody'
        );

    tablaBody.innerHTML = '';

    let acumuladoPagos = 0;

    for (
        let periodo = 1;
        periodo <= plazoMeses;
        periodo++
    ) {

        const saldoInicial = saldoInsoluto;

        const interesDelPeriodo =
            saldoInsoluto *
            tasaMensualEquivalente;

        const ivaSobreInteres =
            interesDelPeriodo *
            IVA_VALOR;

        const pagoMensualTotal =
            amortizacionCapital +
            interesDelPeriodo +
            ivaSobreInteres;

        saldoInsoluto =
            saldoInsoluto -
            amortizacionCapital;

        if (saldoInsoluto < 0) {
            saldoInsoluto = 0;
        }

        acumuladoPagos += pagoMensualTotal;

        const fila =
            document.createElement('tr');

        fila.innerHTML = `
            <td>${periodo}</td>
            <td>$${saldoInicial.toFixed(2)}</td>
            <td>$${amortizacionCapital.toFixed(2)}</td>
            <td>$${interesDelPeriodo.toFixed(2)}</td>
            <td>$${ivaSobreInteres.toFixed(2)}</td>
            <td>$${pagoMensualTotal.toFixed(2)}</td>
            <td>$${saldoInsoluto.toFixed(2)}</td>
        `;

        tablaBody.appendChild(fila);
    }

    const resultado =
        document.getElementById('resultado');

    resultado.innerHTML = `
        <h3>Resumen del Crédito</h3>

        <p>
            <strong>Monto solicitado:</strong>
            $${montoInput.toFixed(2)}
        </p>

        <p>
            <strong>Tasa anual:</strong>
            ${(tasaAnualInput * 100).toFixed(2)}%
        </p>

        <p>
            <strong>Plazo:</strong>
            ${plazoMeses} meses
        </p>

        <p>
            <strong>Capital mensual:</strong>
            $${amortizacionCapital.toFixed(2)}
        </p>

        <p>
            <strong>Total a pagar:</strong>
            $${acumuladoPagos.toFixed(2)}
        </p>
    `;
}