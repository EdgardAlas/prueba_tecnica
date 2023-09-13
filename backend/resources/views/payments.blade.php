<html>
<head>

    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
            border: 1px solid #;
        }

        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            background-color: #dddddd;
        }

        td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

    </style>
</head>
<body>
<div>

    <table>
        <tr>
            <th>Num. Placa</th>
            <th>Tiempo estacionado (min.)</th>
            <th>Cantidad a pagar</th>
        </tr>
        @foreach ($payments as $payment)
            <tr>
                <td>{{ $payment["plate_number"] }}</td>
                <td>{{ $payment["accumulated_minutes"] }}</td>
                <td>{{ $payment["payment"] }}</td>
            </tr>
        @endforeach
    </table>
</div>
</body>
</html>
