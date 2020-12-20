const xxs = 4;
const xs = 8;
const sm = 16;
const md = 20;
const lg = 40;
const xl = 60;

export const paddings = {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
};

export const margins = {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl
};

export const colors = {
  gray01: "#393A3D",
  gray02: "#6B6C72",
  gray03: "#8D9096",
  gray04: "#BABEC5",
  gray05: "#D4D7DC",
  gray06: "#E3E5E8",
  gray07: "#ECEEF1",
  gray08: "#F4F5F8",
  white: '#fff',
  blue02: "#0077C5",
  blue03: "#0097E6",
};

export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
};

/* @mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}

// usage
.my-box {
  padding: 10px;
  
  @include for-desktop-up {
    padding: 20px;
  }
} */