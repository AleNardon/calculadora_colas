// ------------MM1
export function mm1(mu, lambda) {
    const rho = mm1_rho(mu, lambda);
    const Ls = lambda / (mu - lambda);
    const Ws = 1 / (mu - lambda);
    const Lq = lambda ** 2 / (mu * (mu - lambda))
    const Wq = lambda / (mu * (mu - lambda));

}

export function mm1_rho(mu, lambda) {
	return lambda / mu;
}


// export function mm1_Ls(mu, lambda) {
// 	return lambda / (mu - lambda);
// }
// export function mm1_Ws(mu, lambda) {
// 	return 1 / (mu - lambda);
// }
// export function mm1_Lq(mu, lambda) {
// 	return lambda ** 2 / (mu * (mu - lambda));
// }

// export function mm1_Wq(mu, lambda) {
// 	return lambda / (mu * (mu - lambda));
// }

export function mm1_Po(mu, lambda) {
	return 1 - mm1_rho(mu, lambda);
}

export function mm1_Pn(mu, lambda, n) {
	return mm1_Po(mu, lambda) * mm1_rho(mu, lambda) ** n;
}

// -------MM2
export function mm2_rho(mu, lambda) {
	return lambda / (2 * mu);
}

export function mm2_Ls(mu, lambda) {
	const rho = mm2_rho(mu, lambda);
	return rho / (1 - rho);
}

export function mm2_Ws(mu, lambda) {
	return mm2_Ls(mu, lambda) / lambda;
}

export function mm2_Lq(mu, lambda) {
	const rho = mm2_rho(mu, lambda);
	return rho ** 2 / (1 - rho);
}
export function mm2_Wq(mu, lambda) {
	return mm2_Lq(mu, lambda) / lambda;
}

export function mm2_Po(mu, lambda) {
	return 1 - mm2_rho(mu, lambda);
}
export function mm2_Pn(mu, lambda, n) {
	return (1 - n) * mm2_rho(mu, lambda) ** n;
}

// --------MM1N

export function mm1n_Pb(mu, lambda, nN) {
	const rho = mm1_rho(mu, lambda);
	return (mm1_Po(mu, lambda) ** nN * (1 - rho)) / (1 - rho ** (nN + 1));
}
export function mm1n_Trechazo(mu, lambda, nN) {
	return lambda * mm1n_Pb(mu, lambda, nN);
}

export function mm1n_Ls(mu, lambda, nN) {
	const rho = mm1_rho(mu, lambda);
	if (rho == 1) {
		return nN / 2;
	} else {
		return (
			rho / (1 - rho) -
			((nN + 1) * rho ** (nN + 1)) / (1 - rho ** (nN + 1))
		);
	}
}

export function mm1n_Lq(mu, lambda, nN) {
	const rho = mm1_rho(mu, lambda);
	if (rho == 1) {
		return (
			mm1n_Ls(mu, lambda, nN) -
			((1 - rho ** nN) * rho) / (1 - rho ** (nN + 1))
		);
	} else {
		return (nN * (nN - 1)) / (2 * (nN + 1));
	}
}

export function mm1n_Ws(mu, lambda, nN) {
	return mm1n_Ls(mu, lambda, nN) / lambda;
}

export function mm1n_Wq(mu, lambda, nN) {
	return mm1n_Lq(mu, lambda, nN) / lambda;
}

export function mm1n_Po(mu, lambda, nN) {
	const rho = mm1_rho(mu, lambda);
	return (1 - rho) / (1 - rho ** (nN + 1));
}

export function mm1n_Pn(mu, lambda, nN, n) {

	return mm1n_Po(mu, lambda, nN) * mm1_rho(mu, lambda, nN) ** n;
}

// falta rendimiento de salida entrada tasa de llegada efectiva
// Lb y Wb

export function mm1n_Lb(mu, lambda, nN) {
    return mm1n_Lq(mu, lambda, nN) / (1 - mm1n_Po(mu, lambda, nN));
}

export function mm1n_Wb(mu, lambda, nN) {
    return mm1n_Wq(mu, lambda, nN) / (1 - mm1n_Po(mu, lambda, nN));
}

export function mm1n_Yi(mu, lambda, nN) {
    return lambda - mm1n_Trechazo(mu, lambda, nN);
}

export function mm1n_Yo(mu, lambda, nN) {
    return mu - (mu * mm1n_Po(mu, lambda, nN));
}

export function mm1n_lambdaY(mu, lambda, nN,n) {
    return lambda * ( 1- mm1n_Pn(mu, lambda, nN,n));
}

export function mm1n_rhoY(mu, lambda, nN,n) {
    return mm1n_lambdaY(mu, lambda, nN,n) / mu;
}


