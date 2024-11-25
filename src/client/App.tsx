import ROUTES from "./global/routes";
import AppTemplate from "./templates/AppTemplate";

const App: React.FC = () => {
    return (
        <AppTemplate routes={ROUTES} />
    );
}

export default App;