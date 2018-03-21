import * as React from "react";
import { ListingWrapper } from "./ListingWrapper";
import { Categories } from "./Categories";

class CategoryListing extends React.Component<any> {
    public render(): JSX.Element {
        return (
            <ListingWrapper location="categories">
                <Categories baseUrl="/" />
            </ListingWrapper>
        );
    }
}

export default CategoryListing;
