import { RouteReuseStrategy } from "@angular/router/";
import { ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
  storedRouteHandles = new Map<string, DetachedRouteHandle>();
  allowRetriveCache: PathInfo = {
    "angular": true
  };

  shouldReuseRoute(
    before: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    if (
      this.getPath(before) === "detail" &&
      this.getPath(curr) === "angular"
    ) {
      this.allowRetriveCache["angular"] = true;
    } else {
      this.allowRetriveCache["angular"] = false;
    }
    return before.routeConfig === curr.routeConfig;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.get(
      this.getPath(route)
    ) as DetachedRouteHandle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route);
    if (this.allowRetriveCache[path]) {
      return this.storedRouteHandles.has(this.getPath(route));
    }
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route);
    if (this.allowRetriveCache.hasOwnProperty(path)) {
      return true;
    }
    return false;
  }

  store(
    route: ActivatedRouteSnapshot,
    detachedTree: DetachedRouteHandle
  ): void {
    this.storedRouteHandles.set(this.getPath(route), detachedTree);
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    if (route && route.routeConfig && route.routeConfig.path) {
      return route.routeConfig.path;
    }
    return "";
  }
}

export interface PathInfo {
  [key: string]: boolean
}
