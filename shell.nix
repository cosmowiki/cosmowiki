with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/b3df084c706c4206c07d151cb4375f594fe6a7ac) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-8_x ];
}
