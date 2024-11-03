import { getCurrentTime } from "../utils/time";

const now = getCurrentTime();

export interface ITrackingMetaData {
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}

export const trackingMetaData = {
  createdAt: {
    type: Date,
    default: now,
  },
  updatedAt: {
    type: Date,
    default: now,
  },
  createdBy: {
    type: String,
  },
  updatedBy: {
    type: String,
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const setTrackingMetaData = (_this: any) => {
  // Set createdAt and createdBy only if they're missing (first save)
  if (!_this.createdAt) _this.createdAt = now;
  if (!_this.createdBy) _this.createdBy = "system";

  // Always update these fields on each save
  _this.updatedAt = now;
  _this.updatedBy = "system";
};
