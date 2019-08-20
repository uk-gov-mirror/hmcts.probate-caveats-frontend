//module vars
asp_name = "probate-ithc"
asp_rg = "probate-ithc"
env = "ithc"
external_host_name = "probate-caveats.ithc.platform.hmcts.net"

//app settings
capacity = "2"
deployment_env = "preprod"

feature_toggles_api_url = "http://rpe-feature-toggle-api-ithc.service.core-compute-ithc.internal"

idam_service_api = "http://rpe-service-auth-provider-ithc.service.core-compute-ithc.internal"
idam_user_host = "https://idam-api.ithc.platform.hmcts.net"
payment_create_url = "http://payment-api-ithc.service.core-compute-ithc.internal/card-payments"
orchestration_service_url = "http://probate-orchestrator-service-ithc.service.core-compute-ithc.internal"
external_hostName_url = "https://probate.ithc.platform.hmcts.net"

packages_environment = "preprod"
packages_version = "3.0.0"

caveat_frontend_https = "false"
caveat_frontend_use_redis = "true"

caveat_google_track_id = "UA-93598808-5"

reform_envirionment_for_test = "ithc"

vault_section = "preprod"

//unused?
outbound_proxy = ""
probate_redis_url = "betaPreProdprobatecache01.reform.hmcts.net"
f5_redis_listen_port = "6379"
