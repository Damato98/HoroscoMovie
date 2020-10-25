import React, { Component } from 'react';

class AboutPage extends Component {
    static async getInitialProps() {
		return { desarrolladores: ['Agustin Damato', 'Cindy Merida'] };
	}

	render() {
        const desarrolladoresList = this.props.desarrolladores.map((element, index) => {
            return <li key={index}>{element}</li>
        });

		return (
			<>
                <h1>Desarrolladores:</h1>
                <ul>
                    { desarrolladoresList }
                </ul>
                <style jsx>
                    {`
                        h1 { color: blue; }
                    `}
                </style>
            </>
		);
	}
}

export default AboutPage;