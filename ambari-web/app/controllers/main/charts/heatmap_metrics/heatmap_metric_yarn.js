/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with this
 * work for additional information regarding copyright ownership. The ASF
 * licenses this file to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var App = require('app');

/**
 * Base class for any YARN metric.
 */
App.MainChartHeatmapYarnMetrics = App.MainChartHeatmapMetric.extend({

  ajaxIndex: 'hosts.metrics.host_component',

  ajaxData: {
    serviceName: 'YARN',
    componentName: 'NODEMANAGER'
  },

  /**
   * Custom mapper for YARN metrics
   */
  metricMapper: function(json) {
    return this.metricMapperWithTransform(json, this.get('defaultMetric'), this.get('transformValue'));
  },

  /**
   * Utility function which allows extending classes to transform the value
   * assigned to a host.
   *
   * @Function
   */
  transformValue: null
});