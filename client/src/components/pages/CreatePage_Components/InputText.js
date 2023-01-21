const InputText = (props) => {
    const handleChange = (event) => {
        event.preventDefault();
    }

    return (
    <>
        <div>
            <h1>User Text</h1>
            <form>
                <label>
                    message:
                    <input type="text" />
                </label>
            </form>
        </div>
    </>
    );
};