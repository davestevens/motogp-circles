import * as React from "react";
import { ListingWrapper } from "./ListingWrapper";
import { Categories } from "./Categories";

const CategoryListing: React.SFC<void> = (): JSX.Element => (
    <ListingWrapper location="categories">
        <Categories baseUrl="/" />
    </ListingWrapper>
);

export default CategoryListing;
