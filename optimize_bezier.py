import numpy as np
from PIL import Image
from scipy.optimize import minimize

im = Image.open('public/accretion/images/7JW5hiKTuIExiSp00XQILMZFt8.png').convert('RGBA')
w, h = im.size

xs = []
ys = []
for x in range(0, 961, 20):
    for y in range(0, h):
        r, g, b, a = im.getpixel((x, y))
        if a > 80 and (r > 100 or g > 50):
            xs.append(x)
            ys.append(y)
            break

def bezier_fit(params):
    # params: cp1x, cp1y, cp2x, cp2y
    cp1x, cp1y, cp2x, cp2y = params
    err = 0.0
    for target_x, target_y in zip(xs, ys):
        # find t where x(t) ~= target_x
        # x(t) = 3*(1-t)**2*t*cp1x + 3*(1-t)*t**2*cp2x + t**3*960
        # simple binary search for t
        low, high = 0.0, 1.0
        for _ in range(12):
            mid = (low + high) / 2
            x_mid = 3*(1-mid)**2*mid*cp1x + 3*(1-mid)*mid**2*cp2x + mid**3*960
            if x_mid < target_x:
                low = mid
            else:
                high = mid
        t = (low + high) / 2
        y_val = (1-t)**3 * 676 + 3*(1-t)**2*t*cp1y + 3*(1-t)*t**2*cp2y + t**3 * 76
        err += (y_val - target_y)**2
    return err

res = minimize(bezier_fit, [420, 670, 540, 80], method='Nelder-Mead')
print("Optimized control points for first half:")
print(f"P0 = (0, 676)")
print(f"P1 = ({res.x[0]:.1f}, {res.x[1]:.1f})")
print(f"P2 = ({res.x[2]:.1f}, {res.x[3]:.1f})")
print(f"P3 = (960, 76)")
print(f"Symmetric second half P1 = ({1920 - res.x[2]:.1f}, {res.x[3]:.1f})")
print(f"Symmetric second half P2 = ({1920 - res.x[0]:.1f}, {res.x[1]:.1f})")
print(f"Symmetric second half P3 = (1920, 676)")
