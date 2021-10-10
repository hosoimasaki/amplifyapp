import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
//↓bootstrapをインポート
import 'bootstrap/dist/css/bootstrap.css';
import routes from '../routes';

class Default extends React.Component {

    loading = () => <div>Loading...</div>

    render() {
        return (
            <div>
                <header style={styles.header}>i-seiQ Demo</header>
                <main style={styles.main}>
                    <Suspense fallback={this.loading}>
                        <Switch>
                            {
                                routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (<route.component {...props} />)}
                                    />
                                ))
                            }
                            <Route render={() => <p>not found!.</p>} />
                        </Switch>
                    </Suspense>
                </main>
                {/* フッターをつける場合は有効化
                <footer style={styles.footer}>footer</footer>
                */}
            </div>
        );
    }
}

export default Default;

const styles = {
    header: {
        height: 50,
        background: "#32cd32",
        color: "white",
        font: "strong",
        padding: 0, //中央寄せ
        fontWeight: "800",
        fontSize: 30,
    },
    main: {
        height: 200,
    },
    footer: {
        // height: 100,
        // background: "#ddd",
    }
}