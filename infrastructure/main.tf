provider "azurerm" {
 version = "1.44.0"
}

locals {
  aseName = "core-compute-${var.env}"
  vaultName = "${var.product}-${var.env}"
}

data "azurerm_key_vault" "probate_key_vault" {
   name = "${local.vaultName}"
   resource_group_name = "${local.vaultName}"
}

data "azurerm_key_vault" "s2s_vault" {
  name = "s2s-${var.env}"
  resource_group_name = "rpe-service-auth-provider-${var.env}"
}

data "azurerm_key_vault_secret" "probate_frontend_s2s_secret" {
  name = "microservicekey-probate-frontend"
  key_vault_id = "${data.azurerm_key_vault.s2s_vault.id}"
}

resource "azurerm_key_vault_secret" "s2s_key" {
  name = "idam-s2s-secret"
  value = "${data.azurerm_key_vault_secret.probate_frontend_s2s_secret.value}"
  key_vault_id = "${data.azurerm_key_vault.probate_key_vault.id}"
}
