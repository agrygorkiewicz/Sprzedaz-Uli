import React from "react";
import "./logo-products.scss";
import {Link} from "react-router-dom";

const LogoProducts = () => {
    return (
        <>
            <div className="logo">
                <img alt=""
                     src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ3OXB0IiB2aWV3Qm94PSItMzIgMCA0NzkgNDc5Ljk4ODg4IiB3aWR0aD0iNDc5cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTk0LjE1MjM0NCA0NzkuOTg4MjgxYzE0LjUwNzgxMi4wMTk1MzEgMjYuODk0NTMxLTEwLjQ4MDQ2OSAyOS4yNDYwOTQtMjQuODAwNzgxbDMuODcxMDkzLTIzLjE5OTIxOWgxNjIuNDQ5MjE5bDMuODcxMDk0IDIzLjE5OTIxOWMyLjU1MDc4MSAxNS4yMDcwMzEgMTYuMzIwMzEyIDI1LjkyMTg3NSAzMS42ODM1OTQgMjQuNjU2MjUgMTUuMzY3MTg3LTEuMjY5NTMxIDI3LjE5NTMxMi0xNC4wOTM3NSAyNy4yMjI2NTYtMjkuNTExNzE5di0xOC4zNDM3NWgxNmM0LjQxNzk2OCAwIDgtMy41ODIwMzEgOC04di0yOTQuNDg4MjgxbDcuODcxMDk0IDMuNzg1MTU2YzExLjE2NDA2MiA1LjM1OTM3NSAyNC41NTg1OTMuNjUyMzQ0IDI5LjkxNzk2OC0xMC41MTE3MTggNS4zNTkzNzUtMTEuMTY0MDYzLjY1NjI1LTI0LjU2MjUtMTAuNTExNzE4LTI5LjkyMTg3NmwtMTkxLjgxNjQwNy05Mi4wNjI1Yy0yLjE4NzUtMS4wNTA3ODEtNC43MzgyODEtMS4wNTA3ODEtNi45MjU3ODEgMGwtMTkxLjgxNjQwNiA5Mi4wNTQ2ODhjLTcuNzU3ODEzIDMuNzU3ODEyLTEyLjY5MTQwNiAxMS42MDU0NjktMTIuNzE4NzUgMjAuMjI2NTYyLS4wMTU2MjUgNy43MTA5MzggMy45NDE0MDYgMTQuODg2NzE5IDEwLjQ2ODc1IDE4Ljk5NjA5NHMxNC43MTA5MzcgNC41NjY0MDYgMjEuNjU2MjUgMS4yMTg3NWw3Ljg3NS0zLjc4NTE1NnYyOTQuNDg4MjgxYzAgNC40MTc5NjkgMy41ODIwMzEgOCA4IDhoMTZ2MTguMzQzNzVjLjAxNTYyNSAxNi4zNzEwOTQgMTMuMjgxMjUgMjkuNjQwNjI1IDI5LjY1NjI1IDI5LjY1NjI1em0xMy40Njg3NS0yNy40MDYyNWMtMS4xNjAxNTYgNy4wMTE3MTktNy41MTE3MTkgMTEuOTYwOTM4LTE0LjU5NzY1NiAxMS4zNzUtNy4wODU5MzgtLjU4OTg0My0xMi41MzUxNTctNi41MTU2MjUtMTIuNTI3MzQ0LTEzLjYyNXYtMTguMzQzNzVoMzAuNTU4NTk0em0yMjguODc1LTIuMjVjLjAwMzkwNiA3LjEwOTM3NS01LjQ0NTMxMyAxMy4wMzUxNTctMTIuNTMxMjUgMTMuNjI1LTcuMDg1OTM4LjU4NTkzOC0xMy40MzM1OTQtNC4zNjMyODEtMTQuNTk3NjU2LTExLjM3NWwtMy40MzM1OTQtMjAuNTkzNzVoMzAuNTYyNXptLTE4NC0xMDYuMzQzNzVoMTEydjhjMCA0LjQxNzk2OS0zLjU4MjAzMiA4LTggOGgtOTZjLTQuNDE3OTY5IDAtOC0zLjU4MjAzMS04LTh6bS05Ni0xNnYtNzJoODB2OGMwIDEzLjI1MzkwNyAxMC43NDIxODcgMjQgMjQgMjRoOTZjMTMuMjUzOTA2IDAgMjQtMTAuNzQ2MDkzIDI0LTI0di04aDgwdjcyem0wLTE2MGg4MHY4YzAgMTMuMjUzOTA3IDEwLjc0MjE4NyAyNCAyNCAyNGg5NmMxMy4yNTM5MDYgMCAyNC0xMC43NDYwOTMgMjQtMjR2LThoODB2NzJoLTMwNHptOTYgMGgxMTJ2OGMwIDQuNDE3OTY5LTMuNTgyMDMyIDgtOCA4aC05NmMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHptMCA4OGgxMTJ2OGMwIDQuNDE3OTY5LTMuNTgyMDMyIDgtOCA4aC05NmMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHptLTEyNi44MDA3ODItMTM3LjEyODkwNmMtMS45ODgyODEuOTY4NzUtNC4zMzk4NDMuODM5ODQ0LTYuMjEwOTM3LS4zMzU5MzctMS44NzEwOTQtMS4xNzk2ODgtMy4wMDM5MDYtMy4yNDIxODgtMi45ODgyODEtNS40NTMxMjYuMDAzOTA2LTIuNDY4NzUgMS40MTc5NjgtNC43MTg3NSAzLjYzNjcxOC01Ljc5Mjk2OGwxODguMzYzMjgyLTkwLjQxNzk2OSAxODguMzU5Mzc1IDkwLjQwMjM0NGMyLjIxODc1IDEuMDc0MjE5IDMuNjMyODEyIDMuMzI0MjE5IDMuNjQwNjI1IDUuNzkyOTY5LjAxMTcxOCAyLjIxMDkzNy0xLjEyMTA5NCA0LjI3MzQzNy0yLjk5MjE4OCA1LjQ1MzEyNC0xLjg3MTA5NCAxLjE3NTc4Mi00LjIxODc1IDEuMzA0Njg4LTYuMjEwOTM3LjMzNTkzOGwtMTc5LjMzNTkzOC04Ni4wNTQ2ODhjLTIuMTg3NS0xLjA1MDc4MS00LjczODI4MS0xLjA1MDc4MS02LjkyNTc4MSAwem0xODIuODAwNzgyLTcwIDE1MiA3Mi45NjA5Mzd2MzAuMTY3OTY5aC0zMDR2LTMwLjE2Nzk2OXptLTE1MiAyOTUuMTI4OTA2aDgwdjhjMCAxMy4yNTM5MDcgMTAuNzQyMTg3IDI0IDI0IDI0aDk2YzEzLjI1MzkwNiAwIDI0LTEwLjc0NjA5MyAyNC0yNHYtOGg4MHY3MmgtMzA0em0wIDAiLz48cGF0aCBkPSJtMjA4LjQ5NjA5NCAxMzUuOTg4MjgxYzE3LjY3MTg3NSAwIDMyLTE0LjMyODEyNSAzMi0zMnMtMTQuMzI4MTI1LTMyLTMyLTMyYy0xNy42NzU3ODIgMC0zMiAxNC4zMjgxMjUtMzIgMzJzMTQuMzI0MjE4IDMyIDMyIDMyem0wLTQ4YzguODM1OTM3IDAgMTYgNy4xNjQwNjMgMTYgMTYgMCA4LjgzNTkzOC03LjE2NDA2MyAxNi0xNiAxNi04LjgzOTg0NCAwLTE2LTcuMTY0MDYyLTE2LTE2IDAtOC44MzU5MzcgNy4xNjAxNTYtMTYgMTYtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0yNTYuNDk2MDk0IDk1Ljk4ODI4MWgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0xNDQuNDk2MDk0IDk1Ljk4ODI4MWgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0zOTIuNDk2MDk0IDI0Ny45ODgyODFoMTZ2MTI4aC0xNnptMCAwIi8+PHBhdGggZD0ibTM5Mi40OTYwOTQgMzkxLjk4ODI4MWgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im04LjQ5NjA5NCAxNzUuOTg4MjgxaDE2djEyOGgtMTZ6bTAgMCIvPjwvc3ZnPg=="
                     className="logo-beehive"/>

                <Link to="/">
                    <p>Sprzedaż uli</p>
                </Link>
        </div>

        </>
        )}

        export default LogoProducts;