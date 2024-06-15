body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
    color: #333;
}

h2, h3 {
    color: #336633;
}

.login-container {
    text-align: center;
    padding: 50px;
}

.login-container img {
    width: 150px;
    margin-bottom: 20px;
}

.login-container h2 {
    margin-bottom: 30px;
}

.login-container form {
    max-width: 400px;
    margin: 0 auto;
}

.login-container input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-container button {
    padding: 10px 20px;
    background-color: #336633;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.dashboard {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 250px;
    background-color: #336633;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.sidebar a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #2a552a;
    display: block;
    text-align: center;
    transition: background-color 0.3s;
}

.sidebar a:hover {
    background-color: #447744;
}

.sidebar .profile-section {
    text-align: center;
    margin-bottom: 20px;
}

.sidebar .profile-section img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}

.sidebar .profile-section p {
    margin: 0;
    font-weight: bold;
}

.content {
    flex: 1;
    padding: 20px;
}

.content-section {
    display: none;
    animation: fadeIn 0.5s;
}

.content-section h2 {
    margin-top: 0;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #ccc;
}

th, td {
    padding: 10px;
    text-align: left;
}

th {
    background-color: #f4f4f9;
}

tfoot td {
    font-weight: bold;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    background-color: #f4f4f9;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
}

img {
    display: block;
    margin: 0 auto;
}

.large-logo {
    width: 200px;
    margin-bottom: 20px;
}

.news-section {
    margin-top: 20px;
}

.news-item {
    background-color: #f4f4f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.news-item img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 5px;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@media (max-width: 768px) {
    .dashboard {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
    }

    .sidebar a {
        flex: 1;
        text-align: center;
        padding: 10px 0;
    }

    .content {
        padding: 10px;
    }

    table, th, td {
        font-size: 14px;
    }
}
