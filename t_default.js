      const container = document.getElementById('treeContainer');
      const tree = new TreePlugin({
        container: container,
        depth: 100,
        growthSpeed: 40,
        treeScale: -2,
        branchWidth: 0.5,
        colorMode: 'solid',
        color: '#fff',
        seed: Math.floor(Math.random() * 100000),
      });
