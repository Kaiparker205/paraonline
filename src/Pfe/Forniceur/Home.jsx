import classes from "./header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import ParapharmacyAd from "./pharmacyAd";
function NavigationPage() {
  const styledIcon = {
    fontSize: 40,
    ":hover": { color: (theme) => theme.palette.primary.main },
  };

  return (
    <>
      <div className={classes.zoneShow}>
        <div>
          <ShoppingCartIcon sx={styledIcon} />
        </div>
        <div>
          <HomeIcon sx={styledIcon} />
        </div>
        <div>
          {" "}
          <PersonIcon sx={styledIcon} />
        </div>
        <div>
          <BuildIcon sx={styledIcon} />
        </div>
      </div>
      <ParapharmacyAd />
    </>
  );
}

export default NavigationPage;
