import React from "react";
import MetaTags from "react-meta-tags";
import { Helmet } from "react-helmet-async";

class MetaComponents extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <MetaTags>
                    <Helmet>
                    <title>Elegant E-invoices</title>
                        <meta name="description" content="An E-invoice creation service." />
                        <meta property="og:title" name="title" content="Elegant E-invoices" />
                        <meta property="og:image" content="../sprites/logo.jpg" />
                    </Helmet>
                </MetaTags>
            </div>
        );
    }
}
export default MetaComponents;