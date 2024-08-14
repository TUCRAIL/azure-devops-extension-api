﻿/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */

import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";

import * as Reporting from "../AdvancedSecurity.Reporting/Reporting";

export class ReportingRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions) {
        super(options);
    }

    /**
     * Get Alert summary by severity for the org
     * 
     */
    public async getAlertSummaryForOrg(
        ): Promise<Reporting.OrgAlertSummary> {

        return this.beginRequest<Reporting.OrgAlertSummary>({
            apiVersion: "5.1",
            routeTemplate: "_apis/Reporting/summary/{action}",
            routeValues: {
                action: "Alerts"
            }
        });
    }

    /**
     */
    public async getEnablementSummaryForOrg(
        ): Promise<Reporting.OrgEnablementSummary> {

        return this.beginRequest<Reporting.OrgEnablementSummary>({
            apiVersion: "5.1",
            routeTemplate: "_apis/Reporting/summary/{action}",
            routeValues: {
                action: "Enablement"
            }
        });
    }

}
