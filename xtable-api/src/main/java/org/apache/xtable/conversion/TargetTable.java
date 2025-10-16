/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
package org.apache.xtable.conversion;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.Properties;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Getter
@EqualsAndHashCode(callSuper = true)
public class TargetTable extends ExternalTable {
  private final Duration metadataRetention;
  // Performance/feature toggles
  // If true, emit column stats to the target format when supported
  private final Boolean emitColumnStats;
  // If true, include column stats when reading source snapshot (e.g., Iceberg includeColumnStats)
  private final Boolean includeColumnStatsOnRead;
  // Apply file adds/removes in batches to bound memory usage during very large commits
  private final Integer maxFileBatchSize;

  @Builder(toBuilder = true)
  public TargetTable(
      String name,
      String formatName,
      String basePath,
      String[] namespace,
      CatalogConfig catalogConfig,
      Duration metadataRetention,
      Properties additionalProperties,
      Boolean emitColumnStats,
      Boolean includeColumnStatsOnRead,
      Integer maxFileBatchSize) {
    super(name, formatName, basePath, namespace, catalogConfig, additionalProperties);
    this.metadataRetention =
        metadataRetention == null ? Duration.of(7, ChronoUnit.DAYS) : metadataRetention;
    this.emitColumnStats = emitColumnStats;
    this.includeColumnStatsOnRead = includeColumnStatsOnRead;
    this.maxFileBatchSize = maxFileBatchSize;
  }
}
