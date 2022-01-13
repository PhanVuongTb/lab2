import ttht from "../components/ttht";
import hdsv from "../components/hdsv";

const HomePage = {
    render() {
        return /* html */`
            <div class="news">
                ${ttht.render()}
            </div>
            <div class="news">
                ${hdsv.render()}
            </div>
        `;
    },
};
export default HomePage;
