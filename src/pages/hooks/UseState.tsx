import { useState } from "react";

function index() {
    const [data, setData] = useState<{ username: string; password: string }>({
        username: "",
        password: "",
    });
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    function handleSubmit(event: React.FormEvent): void {
        event.preventDefault();
        alert(JSON.stringify(data));
        setData({ username: "", password: "" });
    }

    return (
        <div>
            <h2>useState hook in form</h2>
            <form onSubmit={handleSubmit}>
                <h4>Username:</h4>
                <input
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                />
                <br />
                <br />
                <h4>Password:</h4>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default index;
