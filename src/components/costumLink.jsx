import {NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import Link from "next/link";

function CostumLink({children, ...props}) {
    return <Link {...props} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
        </NavigationMenuLink>
    </Link>;
}

export default CostumLink;