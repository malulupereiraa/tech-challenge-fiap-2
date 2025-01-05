/* eslint-disable @typescript-eslint/no-explicit-any */
class BindUrlService {
  BindUrlPaths(pattern: any, parameters: any) {
    if (!parameters) return pattern;

    const keys = Object.keys(parameters);

    keys.forEach((key) => {
      pattern = pattern.replace(`:${key}`, parameters[key]);
    });

    return pattern;
  }
}

export const bindUrlService = new BindUrlService();
