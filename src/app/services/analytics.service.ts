import {Inject, Injectable} from '@angular/core';
import {AnalyticsImplementation} from "../models/analytics-implementation";
import {Metric} from "../models/metric";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(@Inject('implementation')private implementation: AnalyticsImplementation) {
  }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}
