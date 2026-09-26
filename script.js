body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f4f8;
    color: lab(0.27% 0 0);
    padding: 30px;
}
.container {
    max-width: 1100px;
    background: #ffffff;
    margin: 0 auto;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
h1 {
    color: #12dc4b;
    text-align: center;
    margin-bottom: 25px;
}
h2 {
    color: #b90ab6;
    margin-top: 30px;
}
form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 25px;
}
label {
    font-weight: 600;
    align-self: center;
    color: #ddc10a;
}
input,
select {
    padding: 10px;
    border: 1px solid #cbd5e0;
    border-radius: 5px;
    font-size: 16px;
}
button {
    grid-column: 1 / -1;
    padding: 12px;
    background-color: #16ebb5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color: #7a67b0;
}
#resultado {
    margin-top: 20px;
    padding: 15px;
    background-color: #f0f4f8;
    border-radius: 5px;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-size: 14px;
}
th,
td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}
th {
    background-color: hsl(179, 97%, 47%);
    color: white;
}
tr:nth-child(even) {
    background-color: #1a857c;
}
@media (max-width: 700px) {
    form {
        grid-template-columns: 1fr;
    }
    table {
        font-size: 11px;
    }
    .container {
        padding: 15px;
    }
}
