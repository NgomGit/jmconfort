import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import FeaturedCollection from "../../../components/partials/home/featured-collection";
import NewCollection from "../../../components/partials/home/new-collection";

export default function TabBox(props) {
    const { featured, newarrived, loading } = props;

    return (
        <div className="home-product-tabs product-slider-tab pt-5 pt-md-0">
            <div className="container">
                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show" defaultIndex={0} className="tab">
                    <TabList className="nav nav-tabs" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link">Produits Spécials</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Produits Récents</span>
                        </Tab>
                    </TabList>
                    <div className="tab-content m-b-4">
                        <TabPanel className="tab-pane fade">
                            <FeaturedCollection product={featured} loading={loading} />
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <NewCollection product={newarrived} loading={loading} />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}