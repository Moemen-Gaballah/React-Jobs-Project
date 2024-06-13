const App = () => {
    const name = 'Moemen';
    const names = ["Moemen", "Eslam", "Ahmed", "Mohsen"];
    const loggedIn = true;
    const styles = {
        color: 'red',
        fontSize: '55px'
    }

    return (
        <>
            <div style={{ fontSize: '55px'}} className='text-5xl'>App</div>
            <p style={styles}>Hello {name}</p>
            <ul>
                {
                    names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
            {loggedIn && <h1>Hello Member</h1>}
        </>
    );
};
export default App;