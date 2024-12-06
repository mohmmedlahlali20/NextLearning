import {NavigationMenu, NavigationMenuList,} from "@/components/ui/navigation-menu"
import CostumLink from "@/components/costumLink";

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <CostumLink href="/login" legacyBehavior passHref>
                    Login
                </CostumLink>
                <CostumLink href="/register" legacyBehavior passHref>
                    register
                </CostumLink>

            </NavigationMenuList>
        </NavigationMenu>


    );
}

export default MenuBar;