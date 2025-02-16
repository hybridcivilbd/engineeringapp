
        function calculate() {
            const b = parseFloat(document.getElementById('b').value);
            const h = parseFloat(document.getElementById('h').value);
            const rebarSize = parseFloat(document.getElementById('rebarSize').value);
            const lu_x = parseFloat(document.getElementById('lu_x').value);
            const lu_y = parseFloat(document.getElementById('lu_y').value);
            const nl = parseFloat(document.getElementById('nl').value);
            const fc = parseFloat(document.getElementById('fc').value);
            const fy = parseFloat(document.getElementById('fy').value);
            const wc = parseFloat(document.getElementById('wc').value);

            const Ab = (Math.PI * Math.pow(rebarSize / 2, 2) * 0.00155).toFixed(2);
            const Ast = (Ab * nl).toFixed(2);
            const Ag = (b * h).toFixed(0);
            const Ec = (33 * Math.pow(wc * 1000, 1.5) * Math.sqrt(fc) / 1000).toFixed(2);
            const steelRatio = (Ast / Ag).toFixed(5);

            const lx = (b * Math.pow(h, 3) / 12).toFixed(0);
            const ly = (h * Math.pow(b, 3) / 12).toFixed(0);

            const beta_dns = 0.6;
            const EIeff_x = (0.4 * Ec * lx / (1 + beta_dns)).toFixed(2);
            const EIeff_y = (0.4 * Ec * ly / (1 + beta_dns)).toFixed(2);

            const Pc_x = (Math.PI * EIeff_x / Math.pow(lu_x * 12, 2)).toFixed(2);
            const Pc_y = (Math.PI * EIeff_y / Math.pow(lu_y * 12, 2)).toFixed(2);
            const Pc = Math.min(Pc_x, Pc_y);

            const Po = ((0.85 * fc * (Ag - Ast) + fy * Ast) / 1000).toFixed(2);
            const Pn = (0.8 * Po).toFixed(2);

            const phi = 0.65;
            const designCapacity = (phi * Math.min(Pc, Pn)).toFixed(2);
            const axialCapacity = (phi * Pn).toFixed(2);

            document.getElementById('Ab').textContent = `${Ab}`;
            document.getElementById('Ast').textContent = `${Ast}`;
            document.getElementById('Ag').textContent = `${Ag}`;
            document.getElementById('Ec').textContent = `${Ec}`;
            document.getElementById('steelRatio').textContent = `${steelRatio}`;
            document.getElementById('EIeffX').textContent = `${EIeff_x}`;
            document.getElementById('EIeffY').textContent = `${EIeff_y}`;
            document.getElementById('Pc').textContent = `${Pc}`;
            document.getElementById('Po').textContent = `${Po}`;
            document.getElementById('Pn').textContent = `${Pn}`;
            document.getElementById('finalCapacity').textContent = `${designCapacity}`;
            document.getElementById('axialCapacity').textContent = `${axialCapacity}`;
        }
